/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />
'use strict';
describe('index.htmlのe2eテスト', function () {
    beforeEach(function () {
        // トップページを開く
        browser.get('/#/');
    });
    it('動画リストが1件以上取得できる', function () {
        expect(element(by.css('#container')).all(by.css('.thumbnail-container')).count()).toBeGreaterThan(1);
    });
});
//# sourceMappingURL=index-e2e.js.map