import moment = require("moment-timezone");

class Bot {
    name: string;
    date: Date;

    constructor(theName: string) {
        this.name = theName;
        this.date = new Date()
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

export class MsgBot extends Bot {
    greeting: string;

    constructor(name: string) {
        super(name);
        this.greeting = name;
    }

    getDate(){
        const localDate = moment(this.date);
        return localDate.tz('America/New_York').format('YYYY-mm-DD:HH:MM:SS z');

    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
