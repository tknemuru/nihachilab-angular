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
            function VideoController($scope, videoGetter, sortItemCreator) {
                this.$scope = $scope;
                this.videoGetter = videoGetter;
                this.sortItemCreator = sortItemCreator;
                this.setVideos();
                this.setSortItems();
            }
            /**
             * 動画リストを$scopeにセットします。
             */
            VideoController.prototype.setVideos = function () {
                var _this = this;
                var videos = [];
                this.videoGetter.getVideos(function (data) {
                    _this.$scope.videos = data;
                });
            };
            /**
             * ソートアイテムを$scopeにセットします。
             */
            VideoController.prototype.setSortItems = function () {
                this.$scope.sortItems = this.sortItemCreator.create();
            };
            return VideoController;
        })();
        Controllers.VideoController = VideoController;
    })(Controllers = Nihachilab.Controllers || (Nihachilab.Controllers = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Controllers').controller('VideoController', ['$scope', 'VideoService', 'SortItemCreatorService', Nihachilab.Controllers.VideoController]);
//# sourceMappingURL=video-controller.js.map