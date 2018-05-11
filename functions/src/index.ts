import * as functions from 'firebase-functions';

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

exports.groupA = {


    function1: functions.https.onRequest((request, response) => {
        response.set('Access-Control-Allow-Origin', "*")
        response.set('Access-Control-Allow-Methods', 'GET, POST')


        const docRef = db.collection('users').doc('const setDoc');

        docRef.set({
            first: 'Still not calling',
            last: 'Lovelace No assign',
            born: 1815
        });


        const cityRef = db.collection('cities').doc('LA');


        cityRef.get()
            .then(doc => {
                if (!doc.exists) {
                    response.status(200).send("No such document!")
                    console.log('No such document!');
                } else {
                    // response.status(200).send("doc.data().Population: "+
                    //     doc.data().Population)

                    response.status(200).send(JSON.stringify(doc.data()))

                    console.log('doc.data().Population: ', doc.data().Population)
                    console.log('Document data:', doc.data());
                }
            })
            .catch(err => {
                //response.status(200).send("Error getting document");
                console.log('Error getting document', err);
            });


    })

}