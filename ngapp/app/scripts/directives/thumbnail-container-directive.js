/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画サムネイルコンテナの振る舞いを定義します。
         */
        var ThumbnailContainer = (function () {
            /**
             * コンストラクタ
             */
            function ThumbnailContainer() {
                this.templateUrl = '/scripts/templates/thumbnail-container-pc-template.html';
            }
            return ThumbnailContainer;
        })();
        Directives.ThumbnailContainer = ThumbnailContainer;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('thumbnailContainer', function () {
    return new Nihachilab.Directives.ThumbnailContainer();
});
//# sourceMappingURL=thumbnail-container-directive.js.map