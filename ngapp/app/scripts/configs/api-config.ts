/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Configs {
    "use strict";

    /**
     * APIに関する設定情報を提供します。
     */
    export class ApiConfig {
        /**
         * APIサーバの基底URL
         */
        private static BaseApiUrl: string = '//192.168.152.149:3000/api/v1';

        /**
         * 動画リソースのURL
         */
        private static BaseVideoUrl: string = '/video';

        /**
         * 動画リソースのURLを取得します。
         */
        public static getVideoUrl(): string {
            return this.BaseApiUrl + this.BaseVideoUrl;
        }
    }
}