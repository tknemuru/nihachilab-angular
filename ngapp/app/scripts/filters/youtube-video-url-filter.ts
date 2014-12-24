/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Filters {
    "use strict";

    /**
    * YouTubeの動画URLに整形するフィルタ機能を提供します。
    */
    angular.module('Nihachilab.Filters')
        .filter('youtubeVideoUrl', ['$sce', ($sce) => {
            return (videoId: string): string => {
                return $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + videoId
                    + '?' + 'modestbranding=0' + '&autohide=1');
            }
        }]);
};