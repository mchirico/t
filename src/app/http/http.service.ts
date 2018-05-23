import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpErrorResponse} from '@angular/common/http';

import {TextObject} from '../util/utils';
import {Observable, throwError} from 'rxjs';

import {TextForDataService} from '../util/utils';


export interface ResponseData {
    id: number;
    name: string;
}

export interface Config {
    obj: ResponseData[];
}

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    configUrl = 'https://us-central1-mchirico.cloudfunctions.net/getHeroes';
    headers = [];
    textForDataService = new TextForDataService();


    constructor(private http: HttpClient) {
        this.textForDataService.text = 'initial';
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }


    getConfigResponse(): Observable<HttpResponse<Config>> {
        // TODO: this get<Config> could be cleaned up...?
        return this.http.get<Config>(
            this.configUrl, {observe: 'response'});
    }

    getResponse(textObject: TextObject) {
        this.getConfigResponse()
            .subscribe(resp => {
                const keys = resp.headers.keys();
                this.headers = keys.map(key =>
                    `${key}: ${resp.headers.get(key)}`);

                console.log(resp.body[0].id);
                const d = resp.body;
                textObject.text = `${d[0].name}`;
            });
    }

}
