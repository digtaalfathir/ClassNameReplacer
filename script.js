function processAndDownload() {
  const fileInput = document.getElementById("fileInput");
  const oldClass = document.getElementById("oldClass").value;
  const newClass = document.getElementById("newClass").value;

  if (!fileInput.files.length) {
    alert("Mohon unggah file .cpp terlebih dahulu.");
    return;
  }
  if (!oldClass || !newClass) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Mengganti semua kemunculan nama kelas
    fileContent = fileContent.replaceAll(oldClass, newClass);

    // Konversi oldClass ke snake_case untuk header
    const oldClassSnakeCase = oldClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
    const newClassSnakeCase = newClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Mengganti semua kemunculan nama header
    fileContent = fileContent.replaceAll(oldClassSnakeCase, newClassSnakeCase);

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `updated_${file.name}`;
    downloadLink.click();
  };

  reader.readAsText(file);
}

let currentStep = 1;
const totalSteps = 4;

function goToStep(stepId) {
  // Resetting the active step and content
  document.querySelectorAll(".mdl-stepper-step").forEach((step) => {
    step.classList.remove("active-step");
  });
  document.querySelectorAll(".step-content").forEach((content) => {
    content.classList.remove("active-content");
  });

  // Set the new active step and content based on stepId
  const step = document.getElementById("step" + stepId);
  const content = document.getElementById("stepContent" + stepId);
  step.classList.add("active-step");
  content.classList.add("active-content");

  // Update button visibility
  document.getElementById("prevButton").style.display = stepId === 1 ? "none" : "inline";
  document.getElementById("nextButton").style.display = stepId === totalSteps ? "none" : "inline";

  currentStep = stepId;
}

function nextStep() {
  if (currentStep < totalSteps) {
    goToStep(currentStep + 1);
  }
}

function prevStep() {
  if (currentStep > 1) {
    goToStep(currentStep - 1);
  }
}

// Initialize by hiding the Previous button
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("prevButton").style.display = "none";
});
