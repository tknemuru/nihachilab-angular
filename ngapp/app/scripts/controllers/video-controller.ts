/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Controllers {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface Scope extends ng.IScope {
        /**
         * 動画リスト
         */
        videos: Nihachilab.Models.Video[];
    }

    /**
     * 動画リストの取得機能を提供します。
     */
    export interface IVideoGettable {
        get: (successCallback: ng.IHttpPromiseCallback<Models.Video[]>
        , errorCallback?: ng.IHttpPromiseCallback<any>) => void;
    }

    /**
     * 動画コントローラ
     */
    export class VideoController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: Scope
            , private videoService: IVideoGettable) {
            this.setVideos();
        }

        /**
         * 動画リストを$scopeにセットします。
         */
        private setVideos(): void {
            var videos: Nihachilab.Models.Video[] = [];
            this.videoService.get((data: Nihachilab.Models.Video[]) => {
                this.$scope.videos = data;
            });
        }
    }
}
angular.module('Nihachilab.Controllers', ['Nihachilab.Services', 'Nihachilab.Directives'])
    .controller('VideoController', ['$scope', 'VideoService', Nihachilab.Controllers.VideoController]);
