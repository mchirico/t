import {Observable, Observer} from 'rxjs';

class Person {
    firstName: string;
    lastName: string;

    constructor(first: string, last: string) {
        this.firstName = first;
        this.lastName = last;
    }
}

export class DataService {

    msgArray = ['initial', 'one', 'two', 'three'];
    count = 0;
    people = new Map<string, Person>();

    constructor() {
        this.people['start'] = new Person('Bob', 'Anderson');
        this.people.set('John', {firstName: 'John', lastName: 'Doe'});
    }

    logChange(msg: string) {
        console.log(msg);
    }

    getMsg() {
        console.log('called getMsg');
        const msg = this.msgArray[this.count++ % this.msgArray.length];
        return msg;

    }

    buildObservable(textObject) {
        const myObservable = Observable.create((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next(this.getMsg());
            }, 2000);
            setTimeout(() => {
                observer.next(this.getMsg());
            }, 3000);
            setTimeout(() => {
                observer.next(this.getMsg());
            }, 4000);
            setTimeout(() => {
                observer.next(this.getMsg());
            }, 5000);
            setTimeout(() => {
                observer.complete();
            }, 6000);
        });
        myObservable.subscribe(
            (data: string) => {
                console.log(data);
                textObject.text = data;
            },
            (error: string) => {
                console.log(error);
                textObject.text = error;
            },
            () => {
                console.log('completed');
                textObject.text = 'completed';
            }
        );
    }
}
