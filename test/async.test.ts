import {expect, assert} from 'chai';

const sinon = require('sinon');

describe('Async Tests', () => {
    let myFunctions;

    before(() => {
        myFunctions = require('../src/async-example');
    });
    after(() => {

    });

    beforeEach(() => {

    });
    afterEach(() => {

    });


    //console.log("test")
    it('should have Access-Control-Allow', (done) => {
        myFunctions.dramaticWelcome()

        done();
    });


});