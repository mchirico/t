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


 
    it('tests class', function () {

        let g = new myFunctions.Greeter("msg")
        console.log(g.greet())
        expect(g.greet()).is.equal('Hello, msg')

    });


});