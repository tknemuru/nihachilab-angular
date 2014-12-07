/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Configs;
    (function (Configs) {
        "use strict";
        /**
         * APIに関する設定情報を提供します。
         */
        var ApiConfig = (function () {
            function ApiConfig() {
            }
            /**
             * 動画リソースのURLを取得します。
             */
            ApiConfig.getVideoUrl = function () {
                return this.BaseApiUrl + this.BaseVideoUrl;
            };
            /**
             * 動画リソースのURL(正規表現)を取得します。
             */
            ApiConfig.getVideoUrlRegExp = function () {
                return new RegExp(this.getVideoUrl() + '/([0-9]+)');
            };
            /**
             * 動画再生回数のURL(正規表現)を取得します。
             */
            ApiConfig.getViewsUrlRegExp = function () {
                return new RegExp(this.getVideoUrl() + this.ViewsUrl + '/([0-9]+)');
            };
            /**
             * APIサーバの基底URL
             */
            ApiConfig.BaseApiUrl = '//192.168.152.151:3000/api/v1';
            /**
             * 動画リソースのURL
             */
            ApiConfig.BaseVideoUrl = '/video';
            /**
             * 動画再生回数のURL
             */
            ApiConfig.ViewsUrl = '/views';
            return ApiConfig;
        })();
        Configs.ApiConfig = ApiConfig;
    })(Configs = Nihachilab.Configs || (Nihachilab.Configs = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=api-config.js.map