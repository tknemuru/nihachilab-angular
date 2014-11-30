/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Models {
    "use strict";

    /**
     * 動画モデル
     */
    export class Video {
        public id: number;
        public title_ja: string;
        public title_en: string;
        public description_ja: string;
        public description_en: string;
        public thumbnail_path: string;
        public video_id: string;
        public views: number;
        public created_at: Date;

        constructor() {
            this.id = 1;
            this.title_ja = 'タイトル無し';
            this.title_en = 'No Title';
            this.description_ja = '説明文無し';
            this.description_en = 'No Description';
            this.video_id = 'sampeleid1234';
            this.views = 0;
            this.created_at = new Date('2014/11/22 09:27:12');
        }
    }
}