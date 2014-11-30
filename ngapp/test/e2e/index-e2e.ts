/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />

'use strict';

describe('index.htmlのe2eテスト', () => {  
    beforeEach(() => {
        // トップページを開く
        browser.get('/#/');
    });

    it('動画リストが1件以上取得できる', () => {
        expect(element(by.css('#container')).all(by.css('.thumbnail-container'))
            .count())
            .toBeGreaterThan(1);
    });
});