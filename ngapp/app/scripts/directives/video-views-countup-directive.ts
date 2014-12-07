/// <reference path="../../../bower_components/DefinitelyTyped/angularjs/angular.d.ts" />

module Nihachilab.Directives {
    "use strict";

    /**
     * 動画の再生回数をカウントアップする機能を提供します。
     */
    export interface IViewsCountUpable {
        /**
         * 指定した動画の再生数をカウントアップします。
         */
        countUpViews(id: number
            , successCallback?: ng.IHttpPromiseCallback<any>
            , errorCallback?: ng.IHttpPromiseCallback<any>): void
    }

    /**
     * attrインターフェイス
     */
    export interface Attr extends ng.IAttributes {
        /**
         * 動画ID
         */
        videoViewsCountup: string;
    }

    /**
     * 動画の再生回数をカウントアップする機能を提供します。
     */
    export class VideoViewsCountUp implements ng.IDirective {
        public restrict: string;
        public link: ng.IDirectiveLinkFn;

        /**
         * コンストラクタ
         */
        constructor(countUpper: IViewsCountUpable) {
            this.restrict = 'A';
            this.link = (scope: ng.IScope, element: ng.IAugmentedJQuery, attr: Attr) => {
                element.bind('click', () => {
                    countUpper.countUpViews(parseInt(attr.videoViewsCountup));
                });
            };
        }
    }
}
angular.module('Nihachilab.Directives')
    .directive('videoViewsCountup', ($http) => { return new Nihachilab.Directives.VideoViewsCountUp(new Nihachilab.Services.VideoService($http)); });