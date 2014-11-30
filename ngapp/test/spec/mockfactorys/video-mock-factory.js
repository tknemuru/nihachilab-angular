/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-scenario.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var MockFactorys;
    (function (MockFactorys) {
        "use strict";
        var VideoMockFactory = (function () {
            /**
             * コンストラクタ
             */
            function VideoMockFactory($httpBackend) {
                $httpBackend.whenGET(Nihachilab.Configs.ApiConfig.getVideoUrl()).respond(VideoMockFactory.getVideoMocks());
            }
            /**
             * 動画モックリストの要素数を取得します。
             */
            VideoMockFactory.getMockCount = function () {
                return this.mockCount;
            };
            /**
             * 動画モックのリストを取得します。
             */
            VideoMockFactory.getVideoMocks = function () {
                var mockVideos = [];
                for (var i = 0; i < this.mockCount; i++) {
                    mockVideos.push(this.getNewInstance(i));
                }
                return mockVideos;
            };
            /**
             * 動画モックの新しいインスタンスを取得します。
             */
            VideoMockFactory.getNewInstance = function (id) {
                var video = new Nihachilab.Models.Video();
                video.id = id;
                return video;
            };
            VideoMockFactory.mockCount = 2;
            return VideoMockFactory;
        })();
        MockFactorys.VideoMockFactory = VideoMockFactory;
    })(MockFactorys = Nihachilab.MockFactorys || (Nihachilab.MockFactorys = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=video-mock-factory.js.map