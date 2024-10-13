document.addEventListener("DOMContentLoaded", function () {
  // Ambil semua link navigasi
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Tambahkan event listener untuk setiap link
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Hapus kelas active dari semua link
      navLinks.forEach((nav) => nav.classList.remove("active"));
      // Tambahkan kelas active ke link yang diklik
      this.classList.add("active");
    });
  });
});
