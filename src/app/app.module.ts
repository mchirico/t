import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {HttpClientModule} from '@angular/common/http';
import {SearchService} from './service/search.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, SearchComponent, DevComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot(),
      FormsModule, HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
