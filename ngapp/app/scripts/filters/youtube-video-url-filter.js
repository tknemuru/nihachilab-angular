/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Filters;
    (function (Filters) {
        "use strict";
        /**
        * YouTubeの動画URLに整形するフィルタ機能を提供します。
        */
        angular.module('Nihachilab.Filters').filter('youtubeVideoUrl', ['$sce', function ($sce) {
            return function (videoId) {
                return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId + '?' + 'modestbranding=0' + '&autohide=1');
            };
        }]);
    })(Filters = Nihachilab.Filters || (Nihachilab.Filters = {}));
})(Nihachilab || (Nihachilab = {}));
;
//# sourceMappingURL=youtube-video-url-filter.js.map