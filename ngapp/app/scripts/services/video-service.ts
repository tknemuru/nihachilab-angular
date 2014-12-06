/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Services {
    "use strict";

    /**
     * 動画に関する処理を提供します。
     */
    export class VideoService {
        /**
         * APIのベースURL
         */
        private baseApiUrl: string;

        /**
         * コンストラクタ
         */
        constructor(private $http: ng.IHttpService) {
            this.baseApiUrl = Configs.ApiConfig.getVideoUrl();
        }

        /**
         * 動画を全件取得します。
         */
        public get(successCallback: ng.IHttpPromiseCallback<Models.Video[]>
            , errorCallback: ng.IHttpPromiseCallback<any> = null): void {
            this.$http.get<Models.Video[]>(this.baseApiUrl)
                .success(successCallback)
                .error(errorCallback);
        }

        /**
         * 指定した動画の再生数をカウントアップします。
         */
        public countUpViews(): void {
        }
    }
}
angular.module('Nihachilab.Services')
    .service('VideoService', ['$http', Nihachilab.Services.VideoService]);