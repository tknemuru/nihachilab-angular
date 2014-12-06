/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * リストを閉じる機能を提供します。
         */
        var ListClose = (function () {
            /**
             * コンストラクタ
             */
            function ListClose() {
                this.restrict = 'A';
                this.link = function (scope, element, attr) {
                    element.bind('click', function () {
                        element.parent('li').remove();
                    });
                };
            }
            return ListClose;
        })();
        Directives.ListClose = ListClose;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('listClose', function () {
    return new Nihachilab.Directives.ListClose();
});
//# sourceMappingURL=list-close-directive.js.map