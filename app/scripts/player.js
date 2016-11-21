var Player = function () {
    // video对象
    this.video = null;
    // audio对象
    this.audio = null;
    // 视频资源列表
    this.videoList = [];
    // 音频资源列表
    this.audioList = [];

    // 播放器时长
    this.duration = 0;
    // 播放器当前时间
    this.currentTime = 0;
    // 播放器默认音量(max: 100)
    this.volume = 75;

    // 能否播放视频
    this.canplayVideo = false;
    // 能否播放音频
    this.canplayAudio = false;

    // 是否自动播放
    this.autoplay = false;
    // 是否开启静音
    this.mute = false;
    // 是否循环播放
    this.loop = false;
};

(function (player) {
    // 默认设置
    var defaultSettings = {
        video: null,
        audio: null,
        videoList: [],
        audioList: [],
        duration: 0,
        currentTime: 0,
        volume: 75,
        canplayVideo: false,
        canplayAudio: false,
        autoplay: false,
        mute: false,
        loop: false
    };

    /**
     * 初始化播放器参数
     * @param  {Object} config 配置参数
     */
    player.init = function (config) {
        var self = this;
        Object.keys(config).forEach(function (key) {
            if (self.hasOwnProperty(key)) {
                self[key] = config[key] || defaultSettings[key];
            }
        });
    };
    /**
     * 创建播放器对象
     */
    player.create = function (config) {
        var video = null, audio = null;
        this.init(config);
        // 创建视频播放器
        if (this.videoList.length > 0) {
            video = document.createElement('video');
            video.src = this.videoList[0];
            this.loop ? video.setAttribute('loop', true) : '';
            this.autoplay ? video.setAttribute('autoplay', true) : '';
            this.video = video;
        }
        // 创建音频播放器
        if (this.audioList.length > 0) {
            audio = document.createElement('audio');
            audio.src = this.audioList[0];
            this.loop ? audio.setAttribute('loop', true) : '';
            this.autoplay ? audio.setAttribute('autoplay', true) : '';
            this.audio = audio;
        }
    };
    /**
     * 播放
     */
    player.play = function () {
        if (this.canplayVideo && this.canplayAudio) {
            this.video.play();
            this.audio.play();
        }
    };
    /**
     * 暂停
     */
    player.pause = function () {
        this.video.pause();
        this.audio.pause();
    };
}(Player.prototype));

new Player().play();






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

    // video.addEventListener('timeupdate', function () {
    //     console.log(video.readyState);
    // });

    var timer = setInterval(function () {
        if (video.paused) {
            return;
        }
        ctxOrigin.drawImage(video, 0, 0, 640, 360);
        var imgData = ctxOrigin.getImageData(0, 0, 640, 360);
        // ctx.putImageData(Filter.grey(imgData), 0, 0);
        ctx.putImageData(imgData, 0, 0);
        // ctx.fillStyle = 'red';
        // ctx.font = 'bold 16px microsoft yahei';
        // ctx.fillText(new Date().toLocaleString(), 10, 100);
    }, 1000 / fps);
};