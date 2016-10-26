var Player = function () {
    // video对象
    this.video = null;
    // audio对象
    this.audio = null;
    // 视频资源列表
    this.videoList = [];
    // 音频资源列表
    this.audioList = [];

    // 能否播放视频
    this.canplayVideo = false;
    // 能否播放音频
    this.canplayAudio = false;
    // 是否自动播放
    this.autoplay = false;
    // 播放器时长
    this.duration = 0;
    // 播放器当前时间
    this.currentTime = 0;
    // 播放器默认音量(max: 100)
    this.volume = 75;
    // 是否开启静音
    this.mute = false;
};

(function (player) {
    /**
     * 创建播放器对象
     */
    player.create = function () {
        var video = document.createElement('video'),
            audio = document.createElement('audio');

    };
    player.play = function () {

    };
}(Player.prototype));








window.onload = function () {
    // var fps = 60;
    var video = document.querySelector('video');
    // var canvasOrigin = document.querySelector('#v-canvas-origin');
    // var canvas = document.querySelector('#v-canvas');
    // var ctxOrigin = canvasOrigin.getContext('2d');
    // var ctx = canvas.getContext('2d');

    // video.addEventListener('play', function () {
    //     var videoWidth = video.videoWidth;
    //     var videoHeight = video.videoHeight;
    //     video.videoWidth = 640;
    //     video.videoHeight = 640 / videoWidth * videoHeight;
    // });

    video.addEventListener('canplaythrough', function () {
        console.log('can play');
    });

    video.addEventListener('canplay', function () {
        console.log('can play ....');
    });

    video.addEventListener('play', function () {
        if (video.readyState > 3) {
            console.log('.........');
        }
        console.log(video.readyState);
    });
    video.addEventListener('timeupdate', function () {
        console.log(video.readyState);
    });

    // var timer = setInterval(function () {
    //     if (video.paused) {
    //         return;
    //     }
    //     ctxOrigin.drawImage(video, 0, 0, 640, 360);
    //     var imgData = ctxOrigin.getImageData(0, 0, 640, 360);
    //     // ctx.putImageData(Filter.grey(imgData), 0, 0);
    //     ctx.fillStyle = '#fff';
    //     ctx.font = 'bold 36px serif';
        // ctx.putImageData(Filter.negative(imgData), 0, 0);
        // ctx.fillText(new Date().toLocaleString(), 100, 100);
        // ctx.fillText(new Date().toLocaleString(), 100, 200);
        // ctx.putImageData(Filter.blackAndWhite(imgData), 0, 0);
    //     ctx.putImageData(Filter.lomo(imgData), 0, 0);
    // }, 1000 / fps);
};