import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';

import {TooltipModule} from 'ngx-bootstrap/tooltip';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot(),
      FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
