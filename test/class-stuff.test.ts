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

        let g = new myFunctions.MsgBot("msg");
        console.log(g.greet());
        console.log(g.getDate());

        g.dict.set("key for John", {
            firstname: "John",
            lastname: "Anderson",
            age: 23
        })

        expect(g.dict.has("key for John")).is.true;
        expect(g.dict.get("key for John").firstname).is.equal("John");

        expect(g.greet()).is.equal('Hello, msg')

    });


});