document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.grid'); // Pilih semua grid container

  function updateGridLayout() {
    sections.forEach((section, index) => {
      // Penanganan khusus untuk grid pertama
      if (index === 0) {
        const cards = Array.from(section.children);
        const screenWidth = window.innerWidth;

        // Reset semua kelas grid-cols
        section.classList.remove('grid-cols-4', 'grid-cols-1');
        
        if (screenWidth >= 1024) {
          section.classList.add('grid-cols-4'); // 4 kolom
          section.classList.add('gap-6'); //removing gap
          cards.forEach((card, i) => {
            card.style.display = i < 4 ? "block" : "none"; // Tampilkan 4 item
          });
        } else {
          section.classList.add('grid-cols-1'); // 1 kolom
          section.classList.remove('gap-6'); //removing gap
          cards.forEach((card, i) => {
            card.style.display = i < 1 ? "block" : "none"; // Tampilkan 1 item
          });
        }
        return; // Lanjutkan ke grid berikutnya
      }

      // Penanganan untuk grid selain grid pertama
      const cards = Array.from(section.children);
      const screenWidth = window.innerWidth;

      // Reset semua kelas grid-cols
      section.classList.remove('grid-cols-5', 'grid-cols-3', 'grid-cols-1');

      // Tentukan jumlah kolom dan item yang ditampilkan
      let itemsToShow = 5; // Default untuk layar besar

      if (screenWidth >= 1024) {
        section.classList.add('grid-cols-5'); // 5 kolom
      } else if (screenWidth >= 640) {
        section.classList.add('grid-cols-3'); // 3 kolom
        itemsToShow = 3; // Tampilkan 3 item
      } else {
        section.classList.add('grid-cols-3'); // 1 kolom
        itemsToShow = 3; // Tampilkan 3 item
      }

      // Tampilkan atau sembunyikan item berdasarkan jumlah yang diizinkan
      cards.forEach((card, i) => {
        card.style.display = i < itemsToShow ? "block" : "none";
      });
    });
  }

  // Jalankan fungsi saat DOM selesai dimuat
  updateGridLayout();

  // Tambahkan event listener untuk resize layar
  window.addEventListener("resize", updateGridLayout);
});
