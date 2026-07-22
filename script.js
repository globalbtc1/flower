document.getElementById('playBtn').addEventListener('click', function() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('mainScreen').style.display = 'block';
    
    let music = document.getElementById('bgMusic');
    music.volume = 1.0; 
    music.play();
});
