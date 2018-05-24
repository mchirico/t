import {Component, OnInit} from '@angular/core';
import {
    DataService
} from '../service/data.service';


// Show all these at some point
import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';
import {map, filter, switchMap} from 'rxjs/operators';


import {TextForDataService} from '../util/textObjects';
import {TextObject} from '../util/textObjects';
import {timer} from 'rxjs/internal/observable/timer';
import {interval} from 'rxjs/internal/observable/interval';

@Component({
    selector: 'app-dev',
    templateUrl: './dev.component.html',
    styleUrls: ['./dev.component.scss']
})
export class DevComponent implements OnInit {
    title = 't';
    text0 = '';
    textObs = '';
    textForDataService: TextForDataService;
    count = 0;
    textObject = new TextObject();
    subscribe;

    constructor(private dataService: DataService) {
        this.textForDataService = dataService.textForDataService;
    }

    ngOnInit() {
    }

    button0() {
        this.text0 = `click: ${this.count++}`;
    }

    button1() {
        const msg = `c: ${this.count++}`;
        this.textForDataService = this.dataService.stuff(msg);
        this.dataService.getResponse(this.textObject);
        this.subscribe.unsubscribe();
    }

    buttonPipe() {

        range(1, 20)
            .pipe(filter(x => x % 2 === 1), map(x => x + x))
            .subscribe(x => console.log(`buttonPipe: ${x}`));

        const source = timer(0, 5000);
        const example = source.pipe(switchMap(() => interval(900)));
        this.subscribe = example.subscribe(val => this.textObs = `val: ${val}`);

        setTimeout(() => {
            this.subscribe.unsubscribe();
        }, 10000);

    }

}
