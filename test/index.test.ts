import {expect,assert} from 'chai';
const sinon = require('sinon');

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


    it('calls the original function', function () {
        const callback = sinon.fake();
        const proxy = myFunctions.once(callback);

        proxy();

        console.log(callback.called)
        expect(callback.called).is.true;

        // 2nd way
        assert(callback.called)

    });


});