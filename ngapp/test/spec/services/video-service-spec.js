/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-scenario.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
'use strict';
describe('動画サービスのテスト', function () {
    var $httpBackend;
    var $http;
    var videoService;
    var factory;
    beforeEach(inject(function (_$httpBackend_, _$http_) {
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);
        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);
    }));
    it('動画リストを全件取得する', function () {
        videoService.getVideos(function (data, status, headers, config) {
            expect(data.length).toBe(Nihachilab.MockFactorys.VideoMockFactory.getMockCount());
        });
        $httpBackend.flush();
    });
    it('指定した動画を取得する', function () {
        videoService.getVideo(1, function (data, status, headers, config) {
            expect(data.id).toBe(1);
        });
        $httpBackend.flush();
    });
    it('指定した動画の再生回数をカウントアップする', function () {
        var lastViews;
        videoService.getVideo(1, function (data, status, headers, config) {
            lastViews = data.views;
        });
        $httpBackend.flush();
        videoService.countUpViews(1, function (data, status, headers, config) {
            videoService.getVideo(1, function (data, status, headers, config) {
                expect(data.views).toBe(lastViews + 1);
            });
        });
        $httpBackend.flush();
    });
});
//# sourceMappingURL=video-service-spec.js.map