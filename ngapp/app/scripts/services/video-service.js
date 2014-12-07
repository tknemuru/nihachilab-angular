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
             * 動画リストを取得します。
             */
            VideoService.prototype.getVideos = function (successCallback, errorCallback) {
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.get(this.baseApiUrl).success(successCallback).error(errorCallback);
            };
            /**
             * 指定したIDの動画を取得します。
             */
            VideoService.prototype.getVideo = function (id, successCallback, errorCallback) {
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.get(this.baseApiUrl + '/' + id).success(successCallback).error(errorCallback);
            };
            /**
             * 指定した動画の再生数をカウントアップします。
             */
            VideoService.prototype.countUpViews = function (id, successCallback, errorCallback) {
                if (successCallback === void 0) { successCallback = null; }
                if (errorCallback === void 0) { errorCallback = null; }
                this.$http.post(this.baseApiUrl + '/views/' + id, null).success(successCallback).error(errorCallback);
            };
            return VideoService;
        })();
        Services.VideoService = VideoService;
    })(Services = Nihachilab.Services || (Nihachilab.Services = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Services').service('VideoService', ['$http', Nihachilab.Services.VideoService]);
//# sourceMappingURL=video-service.js.map