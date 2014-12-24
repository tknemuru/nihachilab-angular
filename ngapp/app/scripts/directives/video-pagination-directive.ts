/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * 動画ページネーションの動作を提供します。
     */
    export class VideoPagination implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: Controllers.IVideoScope, element: ng.IAugmentedJQuery) => {
                scope.itemsPerPage = 2;
                scope.currentPage = 1;

                scope.$watch('videos', (newValue: Models.Video[], oldValue: Models.Video[]) => {
                    if (newValue === undefined) { return; }

                    scope.totalItems = scope.videos.length;
                    scope.$watch('currentPage', (newValue: number, oldValue: number) => {
                        var begin: number = ((scope.currentPage - 1) * scope.itemsPerPage);
                        var end: number = begin + scope.itemsPerPage;
                        scope.paginatedVideos = scope.videos.slice(begin, end);
                    });
                });
            };
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('videoPagination', [() => { return new Nihachilab.Directives.VideoPagination() }]);
