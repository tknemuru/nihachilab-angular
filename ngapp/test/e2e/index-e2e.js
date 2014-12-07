/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />
'use strict';
describe('index.htmlのe2eテスト', function () {
    // 動画リスト
    var videos;
    beforeEach(function () {
        // トップページを開く
        browser.get('/#/');
        videos = $('#container').all(by.css('.thumbnail-container'));
    });
    it('動画リストが1件以上取得できる', function () {
        expect(videos.count()).toBeGreaterThan(1);
    });
    it('サムネイルをクリックすると動画が再生される', function () {
        // クリックする動画ID
        var videoId;
        videos.first().getAttribute('id').then(function (id) {
            videoId = id.replace('thumbnail-container-', '');
        });
        // クリック前の再生回数
        var lastViews;
        videos.first().element(by.binding('video.formated_views')).getText().then(function (value) {
            lastViews = parseInt(value);
        });
        // １番目の動画サムネイルをクリック
        videos.first().$('.thumbnail-back-wall').click();
        // 動画ウィンドウが一つだけ立ち上がる       
        $('#container').all(by.css('.video-container')).then(function (value) {
            expect(value.length).toBe(1);
        });
        // クリックしたサムネイルの動画が再生される
        var videoWindows = $('#container').all(by.css('.video-container'));
        videoWindows.first().element(by.tagName('iframe')).getAttribute('src').then(function (value) {
            expect(value.indexOf(videoId)).toBeGreaterThan(0);
        });
        // Closeボタンをクリックすると、動画ウィンドウが閉じる
        $('.video-container .close-button').click();
        $('#container').all(by.css('.video-container')).then(function (value) {
            expect(value.length).toBe(0);
        });
        // ページをリロードすると、再生回数が1増加している
        browser.refresh();
        var views;
        videos.first().element(by.binding('video.formated_views')).getText().then(function (value) {
            views = parseInt(value);
            expect(views).toBe(lastViews + 1);
        });
    });
    it('タイトルをクリックすると動画が再生される', function () {
        // クリックする動画ID
        var videoId;
        videos.first().getAttribute('id').then(function (id) {
            videoId = id.replace('thumbnail-container-', '');
        });
        // クリック前の再生回数
        var lastViews;
        videos.first().element(by.binding('video.formated_views')).getText().then(function (value) {
            lastViews = parseInt(value);
        });
        // １番目の動画タイトルをクリック
        videos.first().$('.thumbnail-title').click();
        // 動画ウィンドウが一つだけ立ち上がる       
        $('#container').all(by.css('.video-container')).then(function (value) {
            expect(value.length).toBe(1);
        });
        // クリックしたサムネイルの動画が再生される
        var videoWindows = $('#container').all(by.css('.video-container'));
        videoWindows.first().element(by.tagName('iframe')).getAttribute('src').then(function (value) {
            expect(value.indexOf(videoId)).toBeGreaterThan(0);
        });
        // Closeボタンをクリックすると、動画ウィンドウが閉じる
        $('.video-container .close-button').click();
        $('#container').all(by.css('.video-container')).then(function (value) {
            expect(value.length).toBe(0);
        });
        // ページをリロードすると、再生回数が1増加している
        browser.refresh();
        var views;
        videos.first().element(by.binding('video.formated_views')).getText().then(function (value) {
            views = parseInt(value);
            expect(views).toBe(lastViews + 1);
        });
    });
    it('「再生回数順」をクリックすると再生回数順に動画リストがソートされる', function () {
        // 初期表示時は「新着順」が選択されている
        $('#sort-item-updatedat').getAttribute('class').then(function (value) {
            expect(value).toBe('sort-item-selected');
        });
        $('#sort-item-views').getAttribute('class').then(function (value) {
            expect(value).toBe('sort-item');
        });
        // 「再生回数順」をクリック
        $('#sort-item-views').click();
        // 「再生回数順」が選択されている
        $('#sort-item-updatedat').getAttribute('class').then(function (value) {
            expect(value).toBe('sort-item');
        });
        $('#sort-item-views').getAttribute('class').then(function (value) {
            expect(value).toBe('sort-item-selected');
        });
        // 再生回数順でソートされている
        var sortedVideos = $('#container').all(by.css('.thumbnail-container'));
        var lastViews = null;
        sortedVideos.each(function (video) {
            video.element(by.binding('video.formated_views')).getText().then(function (views) {
                if (lastViews === null) {
                    lastViews = parseInt(views);
                }
                expect(parseInt(views)).toBeLessThan(lastViews);
                lastViews = parseInt(views);
            });
        });
    });
});
//# sourceMappingURL=index-e2e.js.map