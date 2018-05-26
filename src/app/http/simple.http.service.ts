import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import {Injectable} from '@angular/core';

import {Observable} from 'rxjs/internal/Observable';

import {
    map, filter, switchMap, debounce,
    distinctUntilChanged, debounceTime
} from 'rxjs/operators';

interface Item {
    id: number;
    name: string;
}


@Injectable()
export class SimpleHttpService {

    baseUrl = 'https://api.cdnjs.com/libraries';
    queryUrl = '?search=';


    constructor(private http: HttpClient) {
    }

    search(term: string) {
        return this.http.get<Item[]>('https://us-central1-mchirico.cloudfunctions.net/getHeroes')
            .pipe(map((res) => {
                return res;
            }));
    }

    search2<T>(terms: Observable<string>, returnType: T) {
        return terms.pipe(
            debounceTime(500),
            distinctUntilChanged(),
            switchMap(
                term => this.searchEntries(term, returnType)));

    }

    searchEntries<T>(term: string, returnType: T) {
        return this.http.get<T>(this.baseUrl + this.queryUrl + term)
            .pipe(map((res) => {
                console.log(`searchEntries: ${res}`);
                return res;
            }));
    }


}


