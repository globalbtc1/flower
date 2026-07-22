document.getElementById('playBtn').addEventListener('click', function() {
    // Sembunyikan tombol awal
    document.getElementById('welcomeScreen').style.display = 'none';
    
    // Tampilkan animasi
    document.getElementById('mainScreen').style.display = 'flex';
    
    // Putar lagu
    document.getElementById('bgMusic').play();
});
