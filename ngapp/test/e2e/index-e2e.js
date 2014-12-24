/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />
'use strict';
describe('index.htmlのe2eテスト', function () {
    // 動画リスト
    var videos;
    beforeEach(function () {
        // トップページを開く
        browser.get('/#/');
        videos = $('#container').all(by.css('.video-container'));
    });
    it('動画リストが1件以上取得できる', function () {
        expect(videos.count()).toBeGreaterThan(1);
    });
});
//# sourceMappingURL=index-e2e.js.map