/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * 動画に関する処理を提供します。
         */
        var VideoService = (function () {
            /**
             * コンストラクタ
             */
            function VideoService($http) {
                this.$http = $http;
                this.baseApiUrl = Nihachilab.Configs.ApiConfig.getVideoUrl();
            }
            /**
             * 動画を全件取得します。
             */
            VideoService.prototype.get = function (successCallback, errorCallback) {
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.get(this.baseApiUrl).success(successCallback).error(errorCallback);
            };
            /**
             * 指定した動画の再生数をカウントアップします。
             */
            VideoService.prototype.countUpViews = function () {
            };
            return VideoService;
        })();
        Services.VideoService = VideoService;
    })(Services = Nihachilab.Services || (Nihachilab.Services = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Services').service('VideoService', ['$http', Nihachilab.Services.VideoService]);
//# sourceMappingURL=video-service.js.map