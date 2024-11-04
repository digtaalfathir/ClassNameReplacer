function processFile() {
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

    // Membuat file baru untuk diunduh
    const blob = new Blob([fileContent], { type: "text/plain" });
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = `updated_${file.name}`;
    downloadLink.style.display = "inline";
    downloadLink.textContent = "Download File Baru";
  };

  reader.readAsText(file);
}
