/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画の再生回数をカウントアップする機能を提供します。
         */
        var VideoViewsCountUp = (function () {
            /**
             * コンストラクタ
             */
            function VideoViewsCountUp(countUpper) {
                this.restrict = 'A';
                this.link = function (scope, element, attr) {
                    element.bind('click', function () {
                        countUpper.countUpViews(parseInt(attr.videoViewsCountup));
                    });
                };
            }
            return VideoViewsCountUp;
        })();
        Directives.VideoViewsCountUp = VideoViewsCountUp;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('videoViewsCountup', function ($http) {
    return new Nihachilab.Directives.VideoViewsCountUp(new Nihachilab.Services.VideoService($http));
});
//# sourceMappingURL=video-views-countup-directive.js.map