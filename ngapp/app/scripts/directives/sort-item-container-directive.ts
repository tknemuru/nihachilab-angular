/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * 動画サムネイルコンテナの振る舞いを定義します。
     */
    export class SortItemContainer implements ng.IDirective {
        /**
         * テンプレートURL
         */
        public templateUrl: string;

        /**
         * コンストラクタ
         */
        constructor() {
            this.templateUrl = '/scripts/templates/sort-item-container-template.html';
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('sortItemContainer', () => { return new Nihachilab.Directives.SortItemContainer(); });