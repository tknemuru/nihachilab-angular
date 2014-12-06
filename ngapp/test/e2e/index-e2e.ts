/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />

'use strict';

describe('index.htmlのe2eテスト', () => {  
    // 動画リスト
    var videos: protractor.ElementArrayFinder;
    
    beforeEach(() => {
        // トップページを開く
        browser.get('/#/');
        videos = $('#container').all(by.css('.thumbnail-container'));
    });

    it('動画リストが1件以上取得できる', () => {
        expect(videos.count()).toBeGreaterThan(1);
    });

    it('サムネイルをクリックすると動画が再生される', () => {
        // クリックする動画ID
        var videoId: string;
        videos.first().getAttribute('id')
            .then((id) => {
                videoId = id.replace('thumbnail-container-', '');
            });

        // クリック前の再生回数
        var lastViews: number;
        videos.first().element(by.binding('video.formated_views')).getText()
            .then((value) => {
                lastViews = parseInt(value);
            });

        // １番目の動画サムネイルをクリック
        videos.first().$('.thumbnail-back-wall').click();

        // 動画ウィンドウが一つだけ立ち上がる       
        $('#container').all(by.css('.video-container'))
            .then((value) => {
                expect(value.length).toBe(1);
            });

        // クリックしたサムネイルの動画が再生される
        var videoWindows: protractor.ElementArrayFinder
            = $('#container').all(by.css('.video-container'));
        videoWindows.first()
            .element(by.tagName('iframe'))
            .getAttribute('src')
            .then((value) => {
                expect(value.indexOf(videoId)).toBeGreaterThan(0);
            });

        // Closeボタンをクリックすると、動画ウィンドウが閉じる
        $('.video-container .close-button').click();
        $('#container').all(by.css('.video-container'))
            .then((value) => {
                expect(value.length).toBe(0);
            });

        // ページをリロードすると、再生回数が1増加している
        browser.refresh();
        var views: number;
        videos.first().element(by.binding('video.formated_views')).getText()
            .then((value) => {
                views = parseInt(value);
                expect(views).toBe(lastViews + 1);
            });        
    });
});