import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {HttpClientModule} from '@angular/common/http';
import {SimpleHttpService} from './http/simple.http.service';
import { AppRoutingModule } from './app-routing.module';
import { ChartExampleComponent } from './chart-example/chart-example.component';
import { D3jsExampleComponent } from './d3js-example/d3js-example.component';


@NgModule({
  declarations: [
    AppComponent, SearchComponent, DevComponent,
      ChartExampleComponent, D3jsExampleComponent
  ],
  imports: [
    BrowserModule, TooltipModule.forRoot(),
      FormsModule, HttpClientModule,
      ReactiveFormsModule,
      AppRoutingModule
  ],
  providers: [SimpleHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
