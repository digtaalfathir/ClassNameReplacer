function processAndDownload1() {
  const fileInput1 = document.getElementById("fileInput1");
  const oldClass1 = document.getElementById("oldClass1").value;
  const newClass1 = document.getElementById("newClass1").value;

  if (!fileInput1.files.length) {
    alert("Mohon unggah file .cpp terlebih dahulu.");
    return;
  }
  if (!oldClass1 || !newClass1) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  const file = fileInput1.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass1 dan newClass1 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass1, newClass1);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass1 dan newClass1 yang sudah menjadi lowercase
    const oldClass1LowerCase = oldClass1.toLowerCase();
    const newClass1LowerCase = newClass1.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass1LowerCase, newClass1LowerCase);

    // Mengubah nama file berdasarkan newClass1 menjadi format snake_case
    const newClass1SnakeCase = newClass1.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass1SnakeCase}.cpp`; // Menggunakan newClass1SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAndDownload2() {
  const fileInput2 = document.getElementById("fileInput2");
  let oldClass1 = document.getElementById("oldClass1").value;
  let newClass1 = document.getElementById("newClass1").value;

  if (!fileInput2.files.length) {
    alert("Mohon unggah file .cpp terlebih dahulu.");
    return;
  }
  if (!oldClass1 || !newClass1) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  oldClass1 += "BallFollower";
  newClass1 += "BallFollower";

  const file = fileInput2.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass1 dan newClass1 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass1, newClass1);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass1 dan newClass1 yang sudah menjadi lowercase
    const oldClass1LowerCase = oldClass1.toLowerCase();
    const newClass1LowerCase = newClass1.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass1LowerCase, newClass1LowerCase);

    // Mengubah nama file berdasarkan newClass1 menjadi format snake_case
    const newClass1SnakeCase = newClass1.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass1SnakeCase}.cpp`; // Menggunakan newClass1SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAndDownload3() {
  const fileInput3 = document.getElementById("fileInput3");
  let oldClass1 = document.getElementById("oldClass1").value;
  let newClass1 = document.getElementById("newClass1").value;

  if (!fileInput3.files.length) {
    alert("Mohon unggah file .cpp terlebih dahulu.");
    return;
  }
  if (!oldClass1 || !newClass1) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  oldClass1 += "BallTracker";
  newClass1 += "BallTracker";

  const file = fileInput3.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass1 dan newClass1 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass1, newClass1);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass1 dan newClass1 yang sudah menjadi lowercase
    const oldClass1LowerCase = oldClass1.toLowerCase();
    const newClass1LowerCase = newClass1.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass1LowerCase, newClass1LowerCase);

    // Mengubah nama file berdasarkan newClass1 menjadi format snake_case
    const newClass1SnakeCase = newClass1.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass1SnakeCase}.cpp`; // Menggunakan newClass1SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAll() {
  processAndDownload1();
  processAndDownload2();
  processAndDownload3();
}

function replaceClassNames(fileContent, oldClass, newClass) {
  // Mengganti semua kemunculan nama kelas (PascalCase dan camelCase)
  fileContent = fileContent.replaceAll(oldClass, newClass);

  // Konversi oldClass ke snake_case
  const oldClassSnakeCase = oldClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  const newClassSnakeCase = newClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

  // Ganti semua kemunculan nama snake_case
  fileContent = fileContent.replaceAll(oldClassSnakeCase, newClassSnakeCase);

  // Menangani nama variabel yang diawali dengan kata apa pun dan diakhiri dengan nama kelas (camelCase)
  const oldClassCamelCase = oldClass.charAt(0).toLowerCase() + oldClass.slice(1);
  const newClassCamelCase = newClass.charAt(0).toLowerCase() + newClass.slice(1);

  const variableRegex = new RegExp(`([a-zA-Z_]*)${oldClassCamelCase}`, "g");
  fileContent = fileContent.replace(variableRegex, `$1${newClassCamelCase}`);

  return fileContent;
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
