import {TestBed, async} from '@angular/core/testing';
import {DevComponent} from './dev.component';

import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';


import {HttpClientModule} from '@angular/common/http';


describe('DevComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                DevComponent
            ],
            imports: [FormsModule, BrowserModule, HttpClientModule,
                RouterTestingModule],
        }).compileComponents();
    }));
    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(DevComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(DevComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('t');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(DevComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to t!');
    }));
});
