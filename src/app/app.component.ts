import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 't';
    text0 = '';
    count = 0;

    ngOnInit() {
    }

    button0() {
        this.text0 = 'click: ' + (this.count++).toString();
    }
}
