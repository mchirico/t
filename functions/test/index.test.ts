import {expect} from 'chai';
//const sinon = require('sinon');

const admin = require('firebase-admin');

// At the top of test/index.test.js
const test = require('firebase-functions-test')({
    databaseURL: 'https://septa-3f6ab.firebaseio.com',
    storageBucket: 'septa-3f6ab.appspot.com',
    projectId: 'septa-3f6ab',
}, './test/service-account.json');


const functions = require('firebase-functions');

describe('Cloud Functions', () => {
    let myFunctions;

    before(() => {

        myFunctions = require('../src/index.ts');

        const docRef2 = admin.firestore().collection('users').doc('stuff');
        docRef2.set({
            first: 'From Test2100',
            last: 'Give me some love!!',
            born: 1815
        });

    });

    after(() => {
        test.cleanup();
        // Reset the database.
        //admin.database().ref('messages').remove();
    });

    describe('groupA function1', () => {
        it('should have Access-Control-Allow', (done) => {
            // A fake request object, with req.query.text set to 'input'
            const req = {query: {text: 'input'}};

            // A fake response object, with a stubbed redirect function which does some assertions
            class Res {
                event: string;

                constructor(message: string) {
                    this.event = message;
                }

                checkValue() {
                    return "Hello, " + this.event;
                }

                status(a: string) {
                    this.event = " " + a
                    expect(a).to.be.equal(200);
                    return this;
                }

                send(response: string) {
                    this.event += " " + response

                    console.log("\n***********")
                    console.log(this.event);
                    console.log("\n***********")

                    //expect(b).to.not.be.equal(expectedResponse);
                    done();

                }

                set(headerKey, headerValue) {
                    expect(headerKey).to.be.oneOf(['Access-Control-Allow-Origin',
                        'Access-Control-Allow-Methods'])
                    expect(headerValue).oneOf(['*', 'GET, POST'])
                }
            }

            const res = new Res("groupA function1");
            myFunctions.groupA.function1(req, res);
        });
    });


});
