/// <reference path="DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />
'use strict';
describe('e2eの動作テスト', function () {
    beforeEach(function () {
        browser.get('/#/');
    });
    it('e2eの基本的な動作確認', function () {
        expect(true).toBe(true);
    });
    it('Allo, Alloが表示される', function () {
        expect($('.jumbotron h1').getText()).toBe('\'Allo, \'Allo!');
    });
});
//# sourceMappingURL=e2etest.js.map