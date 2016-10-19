var Player = function () {

};

window.onload = function () {
    var fps = 60;
    var video = document.querySelector('video');
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');

    video.addEventListener('play', function () {
        var videoWidth = video.videoWidth;
        var videoHeight = video.videoHeight;
        video.videoWidth = 640;
        video.videoHeight = 640 / videoWidth * videoHeight;
    });

    setTimeout(function () {
        video.play();
    }, 2000);

    var timer = setInterval(function () {
        if (video.paused) {
            return;
        }
        ctx.drawImage(video, 0, 0, 640, 360);
    }, 1000 / fps);
};