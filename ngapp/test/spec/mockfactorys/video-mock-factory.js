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
                var _this = this;
                this.videos = VideoMockFactory.getVideoMocks();
                $httpBackend.whenGET(Nihachilab.Configs.ApiConfig.getVideoUrl()).respond(this.videos);
                $httpBackend.whenGET(Nihachilab.Configs.ApiConfig.getVideoUrlRegExp()).respond(function (method, url) {
                    return [200, _this.getVideoMock(url)];
                });
                $httpBackend.whenPOST(Nihachilab.Configs.ApiConfig.getViewsUrlRegExp()).respond(function (method, url) {
                    _this.countUpViews(url);
                    return [200, {}, {}];
                });
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
             * 指定したIDの動画モックを取得します。
             */
            VideoMockFactory.prototype.getVideoMock = function (url) {
                var mockId = url.match(Nihachilab.Configs.ApiConfig.getVideoUrlRegExp())[1];
                return this.videos[parseInt(mockId)];
            };
            /**
             * 動画モックの新しいインスタンスを取得します。
             */
            VideoMockFactory.getNewInstance = function (id) {
                var video = new Nihachilab.Models.Video();
                video.id = id;
                return video;
            };
            /**
             * 再生回数をカウントアップします。
             */
            VideoMockFactory.prototype.countUpViews = function (url) {
                var mockId = url.match(Nihachilab.Configs.ApiConfig.getViewsUrlRegExp())[1];
                this.videos[parseInt(mockId)].views++;
            };
            VideoMockFactory.mockCount = 2;
            return VideoMockFactory;
        })();
        MockFactorys.VideoMockFactory = VideoMockFactory;
    })(MockFactorys = Nihachilab.MockFactorys || (Nihachilab.MockFactorys = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=video-mock-factory.js.map