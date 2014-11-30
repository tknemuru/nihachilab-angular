/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Models;
    (function (Models) {
        "use strict";
        /**
         * 動画モデル
         */
        var Video = (function () {
            function Video() {
                this.id = 1;
                this.title_ja = 'タイトル無し';
                this.title_en = 'No Title';
                this.description_ja = '説明文無し';
                this.description_en = 'No Description';
                this.video_id = 'sampeleid1234';
                this.views = 0;
                this.created_at = new Date('2014/11/22 09:27:12');
            }
            return Video;
        })();
        Models.Video = Video;
    })(Models = Nihachilab.Models || (Nihachilab.Models = {}));
})(Nihachilab || (Nihachilab = {}));
//# sourceMappingURL=video-model.js.map