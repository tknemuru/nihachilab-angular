/// <reference path="../../bower_components/DefinitelyTyped/jasmine/jasmine.d.ts" />
/// <reference path="../../bower_components/DefinitelyTyped/angular-protractor/angular-protractor.d.ts" />

'use strict';

describe('e2eの動作テスト', () => {
    beforeEach(() => {
        browser.get('/#/');
    });

    it('e2eの基本的な動作確認', () => {
        expect(true).toBe(true);
    });
});