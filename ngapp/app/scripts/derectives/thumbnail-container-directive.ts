/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * $svopeインターフェイス
     */
    export interface Scope extends ng.IScope {
        /**
         * 動画リスト
         */
        videos: Nihachilab.Models.Video[];
    }

    /**
     * 動画サムネイルコンテナの振る舞いを定義します。
     */
    export class ThumbnailContainer implements ng.IDirective {
        public templateUrl: string;

        constructor() {
            this.templateUrl = '/templates/thumbnail-container-pc-template.html';
        }
    }
}
angular.module('Nihachilab.Directives', [])
    .directive('thumbnailContainer', () => { return new Nihachilab.Directives.ThumbnailContainer(); });