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
};

// 极化
Filter.blackAndWhite = function (imageData) {
    var i = 0,
        data = imageData.data,
        len = data.length,
        avg = 0;
    for (i = 0; i < len; i += 4) {
        avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
        if (avg >= 100) {
            data[i] = 255;
            data[i + 1] = 255;
            data[i + 2] = 255;
        } else {
            data[i] = 0;
            data[i + 1] = 0;
            data[i + 2] = 0;
        }
    }
    return imageData;
};

Filter.lomo = function (imageData) {
    var i = 0,
        data = imageData.data,
        len = data.length,
        r = 0,
        g = 0,
        b = 0;
    var modeSmoothLight = function (basePixel, mixPixel) {
        var res = 0;
        res = mixPixel > 128 ? ((basePixel + (mixPixel * 2 - 255) * ((Math.sqrt(basePixel / 255)) * 255 - basePixel) / 255)) :
          ((basePixel + (mixPixel + mixPixel - 255) * (basePixel - basePixel * basePixel / 255) / 255));
        return Math.min(255, Math.max(0, res));
    };
    var modeExclude = function (basePixel, mixPixel) {
        var res = 0;
        res = (mixPixel + basePixel) - mixPixel * basePixel / 128;
        return Math.min(255, Math.max(0, res));
    };
    for (i = 0; i < len; i += 4) {
        b = modeSmoothLight(data[i], data[i]);
        g = modeSmoothLight(data[i + 1], data[i + 1]);
        r = modeSmoothLight(data[i + 2], data[i + 2]);
        b = modeExclude(b, 80);
        g = modeExclude(g, 15);
        r = modeExclude(r, 5);
        data[i] = b;
        data[i + 1] = g;
        data[i + 2] = r;
        data[i + 3] = 255;
    }
    return imageData;
};