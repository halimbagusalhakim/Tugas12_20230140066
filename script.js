document.getElementById("submitBtn").addEventListener("click", function () {
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const alamat = document.getElementById("alamat").value.trim();
  const angkatan = document.getElementById("angkatan").value;
  const tanggal = document.getElementById("tanggal").value;
  const bidang = document.querySelector('input[name="bidang"]:checked');
  const bidangValue = bidang ? bidang.value : "";

  // Validasi semua field
  if (!nama || !nim || !alamat || !angkatan || !tanggal || !bidangValue) {
    alert("Harap lengkapi semua field!");
    return;
  }

  // Tampilkan data yang dimasukkan
  alert(
    `Nama: ${nama}\nNIM: ${nim}\nPeminatan: ${bidangValue}\nAlamat: ${alamat}\nAngkatan: ${angkatan}\nTanggal: ${tanggal}`
  );

  // Tampilkan notifikasi berhasil
  const notif = document.getElementById("successNotification");
  notif.classList.remove("hidden");
  setTimeout(() => notif.classList.add("hidden"), 3000);

  // Reset form setelah submit
  document.getElementById("nama").value = "";
  document.getElementById("nim").value = "";
  document.getElementById("alamat").value = "";
  document.getElementById("angkatan").value = "";
  document.getElementById("tanggal").value = "";
  if (bidang) bidang.checked = false;
});
