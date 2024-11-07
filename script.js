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

function processAllcpp() {
  processAndDownload1();
  processAndDownload2();
  processAndDownload3();
}

function processAndDownloadHeader1() {
  const fileInput4 = document.getElementById("fileInput4");
  const oldClass2 = document.getElementById("oldClass2").value;
  const newClass2 = document.getElementById("newClass2").value;

  if (!fileInput4.files.length) {
    alert("Mohon unggah file .h terlebih dahulu.");
    return;
  }
  if (!oldClass2 || !newClass2) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  const file = fileInput4.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass2 dan newClass2 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass2, newClass2);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass2 dan newClass2 yang sudah menjadi lowercase
    const oldClass2LowerCase = oldClass2.toLowerCase();
    const newClass2LowerCase = newClass2.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass2LowerCase, newClass2LowerCase);

    // Mengubah nama file berdasarkan newClass2 menjadi format snake_case
    const newClass2SnakeCase = newClass2.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass2SnakeCase}.h`; // Menggunakan newClass2SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAndDownloadHeader2() {
  const fileInput5 = document.getElementById("fileInput5");
  let oldClass2 = document.getElementById("oldClass2").value;
  let newClass2 = document.getElementById("newClass2").value;

  if (!fileInput5.files.length) {
    alert("Mohon unggah file .h terlebih dahulu.");
    return;
  }
  if (!oldClass2 || !newClass2) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  oldClass2 += "BallFollower";
  newClass2 += "BallFollower";

  const file = fileInput5.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass2 dan newClass2 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass2, newClass2);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass2 dan newClass2 yang sudah menjadi lowercase
    const oldClass2LowerCase = oldClass2.toLowerCase();
    const newClass2LowerCase = newClass2.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass2LowerCase, newClass2LowerCase);

    // Mengubah nama file berdasarkan newClass2 menjadi format snake_case
    const newClass2SnakeCase = newClass2.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass2SnakeCase}.h`; // Menggunakan newClass2SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAndDownloadHeader3() {
  const fileInput6 = document.getElementById("fileInput6");
  let oldClass2 = document.getElementById("oldClass2").value;
  let newClass2 = document.getElementById("newClass2").value;

  if (!fileInput6.files.length) {
    alert("Mohon unggah file .h terlebih dahulu.");
    return;
  }
  if (!oldClass2 || !newClass2) {
    alert("Mohon isi nama kelas lama dan baru.");
    return;
  }

  oldClass2 += "BallTracking";
  newClass2 += "BallTracking";

  const file = fileInput6.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass2 dan newClass2 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass2, newClass2);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass2 dan newClass2 yang sudah menjadi lowercase
    const oldClass2LowerCase = oldClass2.toLowerCase();
    const newClass2LowerCase = newClass2.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass2LowerCase, newClass2LowerCase);

    // Setelah proses pertama selesai, tambahkan 'BallTracking' ke oldClass2 dan newClass2
    oldClass2 = oldClass2.replace("BallTracking", "BallTracker");
    newClass2 = newClass2.replace("BallTracking", "BallTracker");

    // Proses pertama: Mengganti semua kemunculan nama kelas menggunakan oldClass2 dan newClass2 (seperti sebelumnya)
    fileContent = replaceClassNames(fileContent, oldClass2, newClass2);

    // Proses kedua: Mengganti semua kemunculan nama kelas dengan oldClass2 dan newClass2 yang sudah menjadi lowercase
    const oldClass3LowerCase = oldClass2.toLowerCase();
    const newClass3LowerCase = newClass2.toLowerCase();
    fileContent = replaceClassNames(fileContent, oldClass3LowerCase, newClass3LowerCase);

    // Mengubah nama file berdasarkan newClass2 menjadi format snake_case
    const newClass2SnakeCase = newClass2.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Membuat file baru untuk diunduh secara otomatis
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `${newClass2SnakeCase}.h`; // Menggunakan newClass2SnakeCase sebagai nama file
    downloadLink.click();
  };

  reader.readAsText(file);
}

function processAllHeader() {
  processAndDownloadHeader1();
  processAndDownloadHeader2();
  processAndDownloadHeader3();
}

function replaceClassNames(fileContent, oldClass, newClass) {
  // Mengganti semua kemunculan nama kelas (PascalCase dan camelCase)
  fileContent = fileContent.replaceAll(oldClass, newClass);

  // Konversi oldClass ke snake_case
  const oldClassSnakeCase = oldClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  const newClassSnakeCase = newClass.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
  const oldClassSnakeCase2 = oldClass.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
  const newClassSnakeCase2 = newClass.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();

  // Ganti semua kemunculan nama snake_case
  fileContent = fileContent.replaceAll(oldClassSnakeCase, newClassSnakeCase);
  fileContent = fileContent.replaceAll(oldClassSnakeCase2, newClassSnakeCase2);

  // Menangani nama variabel yang diawali dengan kata apa pun dan diakhiri dengan nama kelas (camelCase)
  const oldClassCamelCase = oldClass.charAt(0).toLowerCase() + oldClass.slice(1);
  const newClassCamelCase = newClass.charAt(0).toLowerCase() + newClass.slice(1);

  const variableRegex = new RegExp(`([a-zA-Z_]*)${oldClassCamelCase}`, "g");
  fileContent = fileContent.replace(variableRegex, `$1${newClassCamelCase}`);

  return fileContent;
}

function processAndInsertCode() {
  const fileInput = document.getElementById("fileInput7");
  const newClassName = document.getElementById("newClassName").value;

  if (!fileInput.files.length) {
    alert("Mohon unggah file .cpp terlebih dahulu.");
    return;
  }
  if (!newClassName) {
    alert("Mohon isi nama kelas baru.");
    return;
  }

  const file = fileInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    let fileContent = event.target.result;

    // Mengubah nama class baru menjadi format snake_case
    const newClassSnakeCase = newClassName.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();

    // Sisipkan #include di bagian atas setelah baris #include terakhir
    const includeRegex = /(#include\s+<.*?>\n)+/;
    fileContent = fileContent.replace(includeRegex, `$&#include "op3_demo/${newClassSnakeCase}.h"\n`);

    // Update Enum Demo_Status
    const enumRegex = /DemoCount\s*=\s*(\d+),/;
    const match = fileContent.match(enumRegex);
    if (match) {
      const lastNumber = parseInt(match[1]);
      const newEntry = `  ${newClassName} = ${lastNumber + 1},\n  DemoCount = ${lastNumber + 2},`;
      fileContent = fileContent.replace(enumRegex, newEntry);
    } else {
      alert("Tidak menemukan enum DemoCount di dalam file.");
      return;
    }

    // Sisipkan deklarasi ROS wrapper object di bawah komentar //create ros wrapper object
    const rosWrapperRegex = /(\/\/create ros wrapper object\n)/;
    const newObjectLine = `  robotis_op::${newClassName} *${newClassSnakeCase} = new robotis_op::${newClassName}();\n`;
    fileContent = fileContent.replace(rosWrapperRegex, `$1${newObjectLine}`);

    // Sisipkan case baru ke dalam while loop pada switch (desired_status)
    const caseRegex = /(switch\s*\(\s*desired_status\s*\)\s*\{)/;
    const newCase = `
      case ${newClassName}:
      {
        if (current_demo != NULL)
          current_demo->setDemoDisable();

        current_demo = ${newClassSnakeCase};
        current_demo->setDemoEnable();
        ROS_INFO_COND(DEBUG_PRINT, "[Start] ${newClassName.replace(/([A-Z])/g, " $1").trim()} Demo");
        break;
      }`;
    fileContent = fileContent.replace(caseRegex, `$1${newCase}`);

    // Sisipkan case baru dalam "if (msg->data == 'start')" pada buttonHandlerCallback
    const startCaseRegex = /(if\s*\(\s*msg->data\s*==\s*"start"\s*\)\s*\{[^}]*?switch\s*\(\s*desired_status\s*\)\s*\{)/;
    const startNewCase = `
      case ${newClassName}:
        dxlTorqueChecker();
        break;`;
    fileContent = fileContent.replace(startCaseRegex, `$1${startNewCase}`);

    // Sisipkan case baru dalam "else if (msg->data == 'mode')" pada buttonHandlerCallback
    const modeCaseRegex = /(else\s+if\s*\(\s*msg->data\s*==\s*"mode"\s*\)\s*\{[^}]*?switch\s*\(\s*desired_status\s*\)\s*\{)/;
    const modeNewCase = `
      case ${newClassName}:
        setLED(0x04); // Ganti 0x04 sesuai nilai LED yang diinginkan
        break;`;
    fileContent = fileContent.replace(modeCaseRegex, `$1${modeNewCase}`);

    // Sisipkan else if baru dalam void demoModeCommandCallback (pada bagian else)
    const demoModeCallbackRegex = /(void\s+demoModeCommandCallback\s*\([^)]*\)\s*\{(?:[^}]*?)\}\s*\})/;
    const newElseIfBlock = `
    else if (msg->data == "${newClassSnakeCase}") 
    {
      desired_status = ${newClassName};
      apply_desired = true;

      dxlTorqueChecker();
      ROS_INFO_COND(DEBUG_PRINT, "= Start Demo Mode : %d", desired_status);
    }`;
    fileContent = fileContent.replace(demoModeCallbackRegex, `$1${newElseIfBlock}\n  }`);

    // Membuat file baru dengan konten yang sudah diperbarui
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = "demo_node.cpp";
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
