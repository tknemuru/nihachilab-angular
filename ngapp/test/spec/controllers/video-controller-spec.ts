/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-scenario.d.ts" />
/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular-mocks.d.ts" />

'use strict';

describe('動画コントローラのテスト', () => {
    var $rootScope: ng.IRootScopeService;
    var $scope: Nihachilab.Controllers.Scope;
    var $httpBackend: ng.IHttpBackendService;
    var $http: ng.IHttpService;
    var factory: Nihachilab.MockFactorys.VideoMockFactory;
    var videoController: Nihachilab.Controllers.VideoController;
    var videoService: Nihachilab.Services.VideoService;
    var sortItemCreatorService: Nihachilab.Services.SortItemCreatorService;

    beforeEach(inject((_$httpBackend_: ng.IHttpBackendService
        , _$http_: ng.IHttpService
        , _$rootScope_: ng.IRootScopeService) => {

        $rootScope = _$rootScope_;
        $scope = <Nihachilab.Controllers.Scope>$rootScope.$new();
        $httpBackend = _$httpBackend_;
        $http = _$http_;

        // $httpBackendの設定
        factory = new Nihachilab.MockFactorys.VideoMockFactory($httpBackend);

        // 動画サービスの生成
        videoService = new Nihachilab.Services.VideoService($http);

        // ソートアイテム作成サービスの生成
        sortItemCreatorService = new Nihachilab.Services.SortItemCreatorService();

        // 動画コントローラの生成
        videoController = new Nihachilab.Controllers.VideoController($scope, videoService, sortItemCreatorService);
        $httpBackend.flush();
    }));

    it('動画リストを全件取得して$scopeにセットする', () => {
        expect($scope.videos.length).toBe(Nihachilab.MockFactorys.VideoMockFactory.getMockCount());
    });
});