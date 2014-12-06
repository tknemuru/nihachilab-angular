/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画ウィンドウの作成機能を提供します。
         */
        var list = (function () {
            /**
             * コンストラクタ
             */
            function list($compile) {
                this.restrict = 'A';
                this.link = function (scope, element, attr) {
                    element.bind('click', function () {
                        var videoId = attr.videoWindowCreator;
                        var html = $compile('<div video-window="' + videoId + '"></div>')(scope);
                        $('#thumbnail-container-' + videoId).before(html);
                    });
                };
            }
            return list;
        })();
        Directives.list = list;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('videoWindowCreator', function ($compile) {
    return new Nihachilab.Directives.VideoWindowCreator($compile);
});
//# sourceMappingURL=list-destroyer-directive.js.map