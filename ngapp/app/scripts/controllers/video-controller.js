/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Controllers;
    (function (Controllers) {
        "use strict";
        /**
         * 動画コントローラ
         */
        var VideoController = (function () {
            /**
             * コンストラクタ
             */
            function VideoController($scope, videoService) {
                this.$scope = $scope;
                this.videoService = videoService;
                this.setVideos();
            }
            /**
             * 動画リストを$scopeにセットします。
             */
            VideoController.prototype.setVideos = function () {
                var _this = this;
                var videos = [];
                this.videoService.get(function (data) {
                    _this.$scope.videos = data;
                });
            };
            return VideoController;
        })();
        Controllers.VideoController = VideoController;
    })(Controllers = Nihachilab.Controllers || (Nihachilab.Controllers = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Controllers', ['Nihachilab.Services', 'Nihachilab.Directives']).controller('VideoController', ['$scope', 'VideoService', Nihachilab.Controllers.VideoController]);
//# sourceMappingURL=video-controller.js.map