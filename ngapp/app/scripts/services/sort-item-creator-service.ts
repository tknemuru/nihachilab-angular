/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Services {
    "use strict";

    /**
     * ソートアイテムの作成処理を提供します。
     */
    export class SortItemCreatorService {
        /**
         * コンストラクタ
         */
        constructor() {
        }

        /**
         * ソートアイテムを作成します。
         */
        public create(): Nihachilab.Models.SortItem[] {
            var sortItems: Nihachilab.Models.SortItem[] = [];
            sortItems.push(new Nihachilab.Models.SortItem('createdat', '新着順'));
            sortItems.push(new Nihachilab.Models.SortItem('views', '再生回数順'));
            return sortItems;
        }
    }
}
angular.module('Nihachilab.Services')
    .service('SortItemCreatorService', [Nihachilab.Services.SortItemCreatorService]);