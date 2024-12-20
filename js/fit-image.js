// Fungsi untuk menyesuaikan kelas berdasarkan resolusi layar
function adjustClasses() {
    const list1 = document.getElementById('list1');
    const firstImage = document.querySelector('#list1 img:first-child');
    const heading = document.querySelector('#list1 h2');
  
    if (window.innerWidth < 1024) {
      // Ubah class pada div dengan id 'list1'
      list1.classList.remove('justify-start');
      list1.classList.add('justify-center');
  
      // Ubah ukuran gambar pertama
      if (firstImage) {
        firstImage.classList.remove('w-96');
        firstImage.classList.remove('lg:w-72');
        firstImage.classList.add('w-auto', 'h-80');
      }
  
      // Tambahkan class pada h2
      heading.classList.add('text-center');
    } else {
      // Kembalikan ke pengaturan awal
      list1.classList.remove('justify-center');
      list1.classList.add('justify-start');
  
      // Kembalikan ukuran gambar pertama
      if (firstImage) {
        firstImage.classList.remove('w-auto', 'h-80');
        firstImage.classList.add('w-96', 'lg:w-72');
      }
  
      // Hapus class pada h2
      heading.classList.remove('text-center');
    }
  }
  
  // Panggil fungsi saat halaman dimuat dan saat ukuran layar berubah
  window.addEventListener('load', adjustClasses);
  window.addEventListener('resize', adjustClasses);