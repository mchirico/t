import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder
} from '@angular/forms';

import {SimpleHttpService} from '../http/simple.http.service';

import {switchMap, debounceTime} from 'rxjs/operators';
import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';


import {Result} from '../util/utils';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'

})

export class SearchComponent {
    searchField: FormControl;
    coolForm: FormGroup;
    result;

    searchTerm$ = new Subject<string>();
    results: Result;


    constructor(private searchService: SimpleHttpService, private fb: FormBuilder) {
        this.searchField = new FormControl();
        this.coolForm = fb.group({search: this.searchField});
        console.log('here.....');
        this.searchService.search('test')
            .subscribe((x) => {
                console.log(x);
                this.result = x;
            });
        // TODO: this.results smells here...
        this.searchService.search2(this.searchTerm$, this.results)
            .subscribe(
                results => {
                    this.results = results;
                }
            );


    }
}
