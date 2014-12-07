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
        private static BaseApiUrl: string = '//192.168.152.151:3000/api/v1';

        /**
         * 動画リソースのURL
         */
        private static BaseVideoUrl: string = '/video';

        /**
         * 動画再生回数のURL
         */
        private static ViewsUrl: string = '/views';

        /**
         * 動画リソースのURLを取得します。
         */
        public static getVideoUrl(): string {
            return this.BaseApiUrl + this.BaseVideoUrl;
        }

        /**
         * 動画リソースのURL(正規表現)を取得します。
         */
        public static getVideoUrlRegExp(): RegExp {
            return new RegExp(this.getVideoUrl() + '/([0-9]+)');
        }

        /**
         * 動画再生回数のURL(正規表現)を取得します。
         */
        public static getViewsUrlRegExp(): RegExp {
            return new RegExp(this.getVideoUrl() + this.ViewsUrl + '/([0-9]+)');
        }
    }
}