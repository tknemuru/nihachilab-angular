/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Models {
    "use strict";

    /**
     * ソートアイテムモデル
     */
    export class SortItem {
        /**
         * コンストラクタ
         */
        constructor(
            public item: string
            , public label: string) {
        }
    }
}