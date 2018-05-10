import {expect} from 'chai';


describe('Cloud Functions', () => {
    let myFunctions;

    before(() => {
        myFunctions = require('../src/index.ts');
    });

    //console.log("test")
    it('should have Access-Control-Allow', (done) => {
        const ans = myFunctions.test0(3);
        expect(ans).is.equal(17);
        console.log(`value was ${ans}`)
        done();
    });
});