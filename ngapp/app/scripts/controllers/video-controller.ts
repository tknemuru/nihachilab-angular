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

        /**
         * ソートアイテムリスト
         */
        sortItems: Nihachilab.Models.SortItem[];
    }

    /**
     * 動画リストの取得機能を提供します。
     */
    export interface IVideoGettable {
        getVideos: (successCallback: ng.IHttpPromiseCallback<Models.Video[]>
        , errorCallback?: ng.IHttpPromiseCallback<any>) => void;
    }

    /**
     * ソートアイテムリストの作成機能を提供します。
     */
    export interface ISortItemsCoreatable {
        create: () => Nihachilab.Models.SortItem[];
    }

    /**
     * 動画コントローラ
     */
    export class VideoController {
        /**
         * コンストラクタ
         */
        constructor(private $scope: Scope
            , private videoGetter: IVideoGettable
            , private sortItemCreator: ISortItemsCoreatable) {
            this.setVideos();
            this.setSortItems();
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

        /**
         * ソートアイテムを$scopeにセットします。
         */
        private setSortItems(): void {
            this.$scope.sortItems = this.sortItemCreator.create();
        }
    }
}
angular.module('Nihachilab.Controllers')
    .controller('VideoController', ['$scope', 'VideoService', 'SortItemCreatorService', Nihachilab.Controllers.VideoController]);
