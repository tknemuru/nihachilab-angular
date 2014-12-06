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
             * APIサーバの基底URL
             */
            ApiConfig.BaseApiUrl = '//192.168.152.150:3000/api/v1';
            /**
             * 動画リソースのURL
             */
            ApiConfig.BaseVideoUrl = '/video';
            return ApiConfig;
        })();
        Configs.ApiConfig = ApiConfig;
    })(Configs = Nihachilab.Configs || (Nihachilab.Configs = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=api-config.js.map