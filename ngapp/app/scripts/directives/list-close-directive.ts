/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * リストを閉じる機能を提供します。
     */
    export class ListClose implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor() {
            this.restrict = 'A';
            this.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attr: ng.IAttributes) => {
                element.bind('click', () => {
                    element.parent('li').remove();
                });
            };
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('listClose', () => { return new Nihachilab.Directives.ListClose(); });