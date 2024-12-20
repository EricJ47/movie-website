
// Fungsi untuk mengatur class berdasarkan resolusi
function updateClassBasedOnResolution() {
    const hide = document.getElementById('genre');
    const hide2 = document.getElementById('help');

    if (window.innerWidth >= 1024) {
        hide.classList.remove('hidden');
        hide.classList.add('flex');
    } else {
        hide.classList.remove('flex');
        hide.classList.add('hidden');
    }

    if (window.innerWidth >= 1024) {
        hide2.classList.remove('hidden');
        hide2.classList.add('flex');
    } else {
        hide2.classList.remove('flex');
        hide2.classList.add('hidden');
    }
}

// Jalankan fungsi saat halaman dimuat
updateClassBasedOnResolution();

// Jalankan fungsi setiap kali ukuran jendela berubah
window.addEventListener('resize', updateClassBasedOnResolution);
