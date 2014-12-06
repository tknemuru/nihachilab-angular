/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * scopeインターフェイス
     */
    export interface Scope extends ng.IScope {
        /**
         * 動画URL
         */
        videoUrl: string;
    }

    /**
     * attrインターフェイス
     */
    export interface Attr extends ng.IAttributes {
        /**
         * 動画ID
         */
        videoWindow: string;
    }

    /**
     * 動画ウィンドウの作成機能を提供します。
     */
    export class VideoWindow implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;
        public scope: any;
        public templateUrl: any;
        public replace: boolean;

        /**
         * コンストラクタ
         */
        constructor($sce: ng.ISCEService) {
            this.restrict = 'A';
            this.replace = true;
            this.scope = {};
            this.templateUrl = '/scripts/templates/video-window-pc-template.html';
            this.link = (scope: Scope, element: ng.IAugmentedJQuery, attr: Attr) => {
                scope.videoUrl = $sce.trustAsResourceUrl('//www.youtube.com/embed/' + attr.videoWindow + '?wmode=transparent&autoplay=1&theme=dark&controls=1&autohide=0&loop=0&showinfo=0');
            };
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('videoWindow', ($sce) => { return new Nihachilab.Directives.VideoWindow($sce); });