/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />
var Nihachilab;
(function (Nihachilab) {
    var Directives;
    (function (Directives) {
        "use strict";
        /**
         * 動画ページネーションの動作を提供します。
         */
        var VideoPagination = (function () {
            /**
             * コンストラクタ
             */
            function VideoPagination() {
                this.restrict = 'A';
                this.link = function (scope, element) {
                    scope.itemsPerPage = 2;
                    scope.currentPage = 1;
                    scope.$watch('videos', function (newValue, oldValue) {
                        if (newValue === undefined) {
                            return;
                        }
                        scope.totalItems = scope.videos.length;
                        scope.$watch('currentPage', function (newValue, oldValue) {
                            var begin = ((scope.currentPage - 1) * scope.itemsPerPage);
                            var end = begin + scope.itemsPerPage;
                            scope.paginatedVideos = scope.videos.slice(begin, end);
                        });
                    });
                };
            }
            return VideoPagination;
        })();
        Directives.VideoPagination = VideoPagination;
    })(Directives = Nihachilab.Directives || (Nihachilab.Directives = {}));
})(Nihachilab || (Nihachilab = {}));
angular.module('Nihachilab.Directives').directive('videoPagination', [function () {
    return new Nihachilab.Directives.VideoPagination();
}]);
//# sourceMappingURL=video-pagination-directive.js.map