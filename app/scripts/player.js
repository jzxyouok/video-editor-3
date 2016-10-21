var Player = function () {

};

window.onload = function () {
    var fps = 60;
    var video = document.querySelector('video');
    var canvasOrigin = document.querySelector('#v-canvas-origin');
    var canvas = document.querySelector('#v-canvas');
    var ctxOrigin = canvasOrigin.getContext('2d');
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
        ctxOrigin.drawImage(video, 0, 0, 640, 360);
        var imgData = ctxOrigin.getImageData(0, 0, 640, 360);
        ctx.putImageData(Filter.grey(imgData), 0, 0);
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 36px serif';
        // ctx.putImageData(Filter.negative(imgData), 0, 0);
        ctx.fillText(new Date().toLocaleString(), 100, 100);
        ctx.fillText(new Date().toLocaleString(), 100, 200);
        // ctx.putImageData(Filter.blackAndWhite(imgData), 0, 0);
        // ctx.putImageData(Filter.grey(imgData), 0, 0);
    }, 1000 / fps);
};