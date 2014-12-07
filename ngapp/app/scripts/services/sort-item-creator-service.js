/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Services;
    (function (Services) {
        "use strict";
        /**
         * ソートアイテムの作成処理を提供します。
         */
        var SortItemCreatorService = (function () {
            /**
             * コンストラクタ
             */
            function SortItemCreatorService() {
            }
            /**
             * ソートアイテムを作成します。
             */
            SortItemCreatorService.prototype.create = function () {
                var sortItems = [];
                sortItems.push(new Nihachilab.Models.SortItem('createdat', '新着順'));
                sortItems.push(new Nihachilab.Models.SortItem('views', '再生回数順'));
                return sortItems;
            };
            return SortItemCreatorService;
        })();
        Services.SortItemCreatorService = SortItemCreatorService;
    })(Services = Nihachilab.Services || (Nihachilab.Services = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Services').service('SortItemCreatorService', [Nihachilab.Services.SortItemCreatorService]);
//# sourceMappingURL=sort-item-creator-service.js.map