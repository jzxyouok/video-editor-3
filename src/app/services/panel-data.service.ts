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
                "url": "assets/source/videos/cangying-1min.mp4",
                "preview": "assets/source/images/cangying.jpg",
                "duration": 348
            },
            {
                "id": 2,
                "title": "荷花",
                "extension": "mp4",
                "url": "assets/source/videos/ty.mp4",
                "preview": "assets/source/images/lotus.jpg",
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
                "url": "assets/source/images/Chrysanthemum.jpg",
                "preview": "assets/source/images/p-Chrysanthemum.jpg"
            },
            {
                "id": 2,
                "title": "沙漠",
                "extension": "jpg",
                "url": "assets/source/images/Desert.jpg",
                "preview": "assets/source/images/p-Desert.jpg"
            },
            {
                "id": 3,
                "title": "八仙花",
                "extension": "jpg",
                "url": "assets/source/images/Hydrangeas.jpg",
                "preview": "assets/source/images/p-Hydrangeas.jpg"
            },
            {
                "id": 4,
                "title": "水母",
                "extension": "jpg",
                "url": "assets/source/images/Jellyfish.jpg",
                "preview": "assets/source/images/p-Jellyfish.jpg"
            },
            {
                "id": 5,
                "title": "考拉",
                "extension": "jpg",
                "url": "assets/source/images/Koala.jpg",
                "preview": "assets/source/images/p-Koala.jpg"
            },
            {
                "id": 6,
                "title": "灯塔",
                "extension": "jpg",
                "url": "assets/source/images/Lighthouse.jpg",
                "preview": "assets/source/images/p-Lighthouse.jpg"
            },
            {
                "id": 7,
                "title": "企鹅",
                "extension": "jpg",
                "url": "assets/source/images/Penguins.jpg",
                "preview": "assets/source/images/p-Penguins.jpg"
            },
            {
                "id": 8,
                "title": "郁金香",
                "extension": "jpg",
                "url": "assets/source/images/Tulips.jpg",
                "preview": "assets/source/images/p-Tulips.jpg"
            }
        ];
    }

    getAudioList() {
        return [
            {
                "id": 1,
                "title": "Kalimba",
                "extension": "mp3",
                "url": "assets/source/audios/Kalimba.mp3",
                "duration": 348
            },
            {
                "id": 2,
                "title": "Maid with the Flaxen Hair",
                "extension": "mp3",
                "url": "assets/source/audios/Maid with the Flaxen Hair.mp3",
                "duration": 169
            },
            {
                "id": 3,
                "title": "Sleep Away",
                "extension": "mp3",
                "url": "assets/source/audios/Sleep Away.mp3",
                "duration": 200
            }
        ];
    }

}
