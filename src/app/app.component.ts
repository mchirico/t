import {Component, OnInit} from '@angular/core';

import {DataService} from '../data/data.service';

class TextObject {
    text: string;
    count: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    textObject = new TextObject();

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.logChange('Init');
        this.dataService.buildObservable(this.textObject);
    }

    nextItem() {
        this.dataService.buildObservable(this.textObject);
    }
}
