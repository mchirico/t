import {Injectable} from '@angular/core';
import {TextObject, TextForDataService} from '../util/utils';
import {HttpService} from '../http/http.service';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    textForDataService: TextForDataService;

    constructor(private httpService: HttpService) {
        this.textForDataService = new TextForDataService();
        this.textForDataService.text = 'initial';
    }


    stuff(s: string) {
        console.log('a');
        this.textForDataService.updateCount();
        const count = this.textForDataService.count;
        this.textForDataService.text = `c: ${count}`;
        return this.textForDataService;
    }


    getResponse(textObject: TextObject) {
        this.httpService.getResponse(textObject);
    }
}
