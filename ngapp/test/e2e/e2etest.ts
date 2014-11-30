/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />

'use strict';

describe('e2eの動作テスト', () => {
    beforeEach(() => {
        browser.get('/#/');
    });

    it('e2eの基本的な動作確認', () => {
        expect(true).toBe(true);
    });

    it('Allo, Alloが表示される', () => {
        expect($('.jumbotron h1').getText()).toBe('\'Allo, \'Allo!');
    });
});