/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />

'use strict';

describe('index.htmlのe2eテスト', () => {  
    // 動画リスト
    var videos: protractor.ElementArrayFinder;
    
    beforeEach(() => {
        // トップページを開く
        browser.get('/#/');
        videos = $('#container').all(by.css('.video-container'));
    });

    it('動画リストが1件以上取得できる', () => {
        expect(videos.count()).toBeGreaterThan(1);
    });
});