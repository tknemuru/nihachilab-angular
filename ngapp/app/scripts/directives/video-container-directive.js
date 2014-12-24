/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画コンテナの振る舞いを定義します。
         */
        var VideoContainer = (function () {
            /**
             * コンストラクタ
             */
            function VideoContainer() {
                this.templateUrl = '/scripts/templates/video-container-template.html';
            }
            return VideoContainer;
        })();
        Directives.VideoContainer = VideoContainer;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('videoContainer', function () {
    return new Nihachilab.Directives.VideoContainer();
});
//# sourceMappingURL=video-container-directive.js.map