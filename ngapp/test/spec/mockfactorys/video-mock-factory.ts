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
         * 動画リスト
         */
        private videos: Nihachilab.Models.Video[];

        /**
         * コンストラクタ
         */
        constructor($httpBackend: ng.IHttpBackendService) {
            this.videos = VideoMockFactory.getVideoMocks();
            $httpBackend.whenGET(Configs.ApiConfig.getVideoUrl())
                .respond(this.videos);
            $httpBackend.whenGET(Configs.ApiConfig.getVideoUrlRegExp())
                .respond((method: any, url: string) => {
                    return [200, this.getVideoMock(url)];
                });
            $httpBackend.whenPOST(Configs.ApiConfig.getViewsUrlRegExp())
                .respond((method: any, url: string) => {
                    this.countUpViews(url);
                    return [200, {}, {}];
                });
        }

        /**
         * 動画モックのリストを取得します。
         */
        private static getVideoMocks(): Nihachilab.Models.Video[] {
            var mockVideos: Nihachilab.Models.Video[] = [];
            for (var i = 0; i < this.mockCount; i++) {
                mockVideos.push(this.getNewInstance(i));
            }
            return mockVideos;
        }

        /**
         * 指定したIDの動画モックを取得します。
         */
        private getVideoMock(url: string): Nihachilab.Models.Video {
            var mockId = url.match(Configs.ApiConfig.getVideoUrlRegExp())[1];
            return this.videos[parseInt(mockId)];
        }

        /**
         * 動画モックの新しいインスタンスを取得します。
         */
        private static getNewInstance(id: number): Nihachilab.Models.Video {
            var video = new Nihachilab.Models.Video();
            video.id = id;
            return video;
        }

        /**
         * 再生回数をカウントアップします。
         */
        private countUpViews(url: string): void {
            var mockId = url.match(Configs.ApiConfig.getViewsUrlRegExp())[1];
            this.videos[parseInt(mockId)].views++;
        }
    }
}