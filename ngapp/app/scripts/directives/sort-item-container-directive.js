/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画サムネイルコンテナの振る舞いを定義します。
         */
        var SortItemContainer = (function () {
            /**
             * コンストラクタ
             */
            function SortItemContainer() {
                this.templateUrl = '/scripts/templates/sort-item-container-template.html';
            }
            return SortItemContainer;
        })();
        Directives.SortItemContainer = SortItemContainer;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('sortItemContainer', function () {
    return new Nihachilab.Directives.SortItemContainer();
});
//# sourceMappingURL=sort-item-container-directive.js.map