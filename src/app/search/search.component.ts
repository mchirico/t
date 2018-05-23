import {Component} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormBuilder
} from '@angular/forms';

import {SearchService} from '../service/search.service';

import {switchMap, debounceTime} from 'rxjs/operators';

import {Observable, Subject, ReplaySubject, from, of, range} from 'rxjs';

@Component({
    selector: 'app-search',
    template: `
        we are in search
        <form [formGroup]="coolForm"><input formControlName="search" placeholder="Search Spotify artist"></form>

        <div *ngFor="let artist of result">
            {{artist.name}}
        </div>
    `
})

export class SearchComponent {
    searchField: FormControl;
    coolForm: FormGroup;
    result;

    // constructor(private searchService: SearchService, private fb: FormBuilder) {
    //     this.searchField = new FormControl();
    //     this.coolForm = fb.group({search: this.searchField});
    //
    //     this.searchField.valueChanges
    //         .pipe(debounceTime(400),
    //             switchMap(term => this.searchService.search(term)))
    //         .subscribe(result => {
    //             this.result = result.artists.items;
    //         });
    // }
}
