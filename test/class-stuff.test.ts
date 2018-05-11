import {expect, assert} from 'chai';

const sinon = require('sinon');

describe('Class Stuff', () => {
    let myFunctions;

    before(() => {
        myFunctions = require('../src/class-stuff.ts');
    });
    after(() => {

    });

    beforeEach(() => {

    });
    afterEach(() => {

    });


 
    it('tests if message', function () {

        let g = new myFunctions.MsgBot("msg")
        console.log(g.greet())
        console.log(g.getDate())
        expect(g.greet()).is.equal('Hello, msg')

    });


});