/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-scenario.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />

module Nihachilab.MockFactorys {
    "use strict";

    export class VideoMockFactory {
        /**
         * 動画モックリストの要素数を取得します。
         */
        public static getMockCount(): number {
            return this.mockCount;
        }
        private static mockCount: number = 2;

        /**
         * コンストラクタ
         */
        constructor($httpBackend: ng.IHttpBackendService) {
            $httpBackend.whenGET(Configs.ApiConfig.getVideoUrl())
                .respond(VideoMockFactory.getVideoMocks());
        }

        /**
         * 動画モックのリストを取得します。
         */
        public static getVideoMocks(): Nihachilab.Models.Video[] {
            var mockVideos: Nihachilab.Models.Video[] = [];
            for (var i = 0; i < this.mockCount; i++) {
                mockVideos.push(this.getNewInstance(i));
            }
            return mockVideos;
        }

        /**
         * 動画モックの新しいインスタンスを取得します。
         */
        private static getNewInstance(id: number): Nihachilab.Models.Video {
            var video = new Nihachilab.Models.Video();
            video.id = id;
            return video;
        }
    }
}