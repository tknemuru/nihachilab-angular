/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * attrインターフェイス
     */
    export interface Attr extends ng.IAttributes {
        /**
         * 動画ID
         */
        videoWindowCreator: string;
    }

    /**
     * 動画ウィンドウの作成機能を提供します。
     */
    export class VideoWindowCreator implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor($compile: ng.ICompileService) {
            this.restrict = 'A';
            this.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attr: Attr) => {
                element.bind('click', () => {
                    var videoId: string = attr.videoWindowCreator;
                    var html: ng.IAugmentedJQuery = $compile('<div video-window="' + videoId + '"></div>')(scope);
                    $('#thumbnail-container-' + videoId).before(html);
                });
            };
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('videoWindowCreator', ['$compile', ($compile) => { return new Nihachilab.Directives.VideoWindowCreator($compile); }]);