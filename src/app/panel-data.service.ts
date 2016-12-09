import { Injectable } from '@angular/core';

@Injectable()
export class PanelDataService {

    constructor() { }

    getVideoList() {
        return [
            {
                "id": 1,
                "title": "苍蝇一分钟的生命",
                "extension": "mp4",
                "url": "source/videos/cangying-1min.mp4",
                "preview": "source/videos/cangying.jpg",
                "duration": 348
            },
            {
                "id": 2,
                "title": "荷花",
                "extension": "mp4",
                "url": "source/videos/ty.mp4",
                "preview": "source/videos/lotus.jpg",
                "duration": 169
            }
        ];
    }

    getPictureList() {
        return [
            {
                "id": 1,
                "title": "菊花",
                "extension": "jpg",
                "url": "source/images/Chrysanthemum.jpg",
                "preview": "source/images/p-Chrysanthemum.jpg"
            },
            {
                "id": 2,
                "title": "沙漠",
                "extension": "jpg",
                "url": "source/images/Desert.jpg",
                "preview": "source/images/p-Desert.jpg"
            },
            {
                "id": 3,
                "title": "八仙花",
                "extension": "jpg",
                "url": "source/images/Hydrangeas.jpg",
                "preview": "source/images/p-Hydrangeas.jpg"
            },
            {
                "id": 4,
                "title": "水母",
                "extension": "jpg",
                "url": "source/images/Jellyfish.jpg",
                "preview": "source/images/p-Jellyfish.jpg"
            },
            {
                "id": 5,
                "title": "考拉",
                "extension": "jpg",
                "url": "source/images/Koala.jpg",
                "preview": "source/images/p-Koala.jpg"
            },
            {
                "id": 6,
                "title": "灯塔",
                "extension": "jpg",
                "url": "source/images/Lighthouse.jpg",
                "preview": "source/images/p-Lighthouse.jpg"
            },
            {
                "id": 7,
                "title": "企鹅",
                "extension": "jpg",
                "url": "source/images/Penguins.jpg",
                "preview": "source/images/p-Penguins.jpg"
            },
            {
                "id": 8,
                "title": "郁金香",
                "extension": "jpg",
                "url": "source/images/Tulips.jpg",
                "preview": "source/images/p-Tulips.jpg"
            }
        ];
    }

    getAudioList() {
        return [
            {
                "id": 1,
                "title": "Kalimba",
                "extension": "mp3",
                "url": "source/audios/Kalimba.mp3",
                "duration": 348
            },
            {
                "id": 2,
                "title": "Maid with the Flaxen Hair",
                "extension": "mp3",
                "url": "source/audios/Maid with the Flaxen Hair.mp3",
                "duration": 169
            },
            {
                "id": 3,
                "title": "Sleep Away",
                "extension": "mp3",
                "url": "source/audios/Sleep Away.mp3",
                "duration": 200
            }
        ];
    }

}
