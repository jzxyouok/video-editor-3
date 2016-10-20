var Filter = {};

// 负片
Filter.negative = function (imageData) {
    var i = 0,
        data = imageData.data,
        len = data.length;
    for (i = 0; i < len; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
    return imageData;
};

// 灰度
Filter.grey = function (imageData) {
    var rateReb = 0.3,
        rateGreen = 0.59,
        rateBlue = 0.11;
    var data = imageData.data,
        i = 0,
        len = data.length || 0;
    var res = 0;
    for (i = 0; i < len; i += 4) {
        res = Math.floor((rateReb * data[i] + rateGreen * data[i + 1] + rateBlue * data[i + 2]));
        data[i] = res;
        data[i + 1] = res;
        data[i + 2] = res;
    }
    return imageData;
}