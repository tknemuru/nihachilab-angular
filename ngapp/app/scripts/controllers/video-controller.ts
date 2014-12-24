/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Controllers {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface IVideoScope extends ng.IScope {
        /**
         * 動画リスト
         */
        videos: Nihachilab.Models.Video[];

        /**
         * ページ制御された動画リスト
         */
        paginatedVideos: Nihachilab.Models.Video[];

        /**
         * 現在のページ
         */
        currentPage: number;

        /**
         * 1ページあたりのアイテム数
         */
        itemsPerPage: number;

        /**
         * アイテムの合計数
         */
        totalItems: number;
    }

    /**
     * 動画リストの取得機能を提供します。
     */
    export interface IVideoGettable {
        getVideos: (successCallback: ng.IHttpPromiseCallback<Models.Video[]>
        , errorCallback?: ng.IHttpPromiseCallback<any>) => void;
    }

    /**
     * 動画コントローラ
     */
    export class VideoController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: IVideoScope
            , private videoGetter: IVideoGettable) {
            this.setVideos();
        }

        /**
         * 動画リストを$scopeにセットします。
         */
        private setVideos(): void {
            var videos: Nihachilab.Models.Video[] = [];
            this.videoGetter.getVideos((data: Nihachilab.Models.Video[]) => {
                this.$scope.videos = data;
            });
        }
    }
}
angular.module('Nihachilab.Controllers')
    .controller('VideoController', ['$scope', 'VideoService', Nihachilab.Controllers.VideoController]);
