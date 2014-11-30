/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-scenario.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />
'use strict';
describe('動画コントローラのテスト', function () {
    var $rootScope;
    var $scope;
    var $httpBackend;
    var $http;
    var factory;
    var videoController;
    var videoService;
    beforeEach(inject(function (_$httpBackend_, _$http_, _$rootScope_) {
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $http = _$http_;
        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);
        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);
        // 動画コントローラの生成
        videoController = new Nihachilab.Controllers.VideoController($scope, videoService);
        $httpBackend.flush();
    }));
    it('動画リストを全件取得して$scopeにセットする', function () {
        expect($scope.videos.length).toBe(Nihachilab.MockFactorys.VideoMockFactory.getMockCount());
    });
});
//# sourceMappingURL=video-controller-spec.js.map