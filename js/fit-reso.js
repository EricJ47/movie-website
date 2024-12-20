// Fungsi untuk mengatur class berdasarkan resolusi
function updateClassBasedOnResolution() {
    const div = document.getElementById('continue');

    if (window.innerWidth >= 1024) {
        div.classList.remove('space-x-8');
        div.classList.add('space-x-20');
    } else {
        div.classList.remove('space-x-20');
        div.classList.add('space-x-8');
    }
}

// Jalankan fungsi saat halaman dimuat
updateClassBasedOnResolution();

// Jalankan fungsi setiap kali ukuran jendela berubah
window.addEventListener('resize', updateClassBasedOnResolution);
