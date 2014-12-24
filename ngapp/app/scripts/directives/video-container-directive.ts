/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * 動画コンテナの振る舞いを定義します。
     */
    export class VideoContainer implements ng.IDirective {
        /**
         * テンプレートURL
         */
        public templateUrl: string;

        /**
         * コンストラクタ
         */
        constructor() {
            this.templateUrl = '/scripts/templates/video-container-template.html';
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('videoContainer', () => { return new Nihachilab.Directives.VideoContainer(); });