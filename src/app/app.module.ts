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
import { Ds3ExampleComponent } from './ds3-example/ds3-example.component';


@NgModule({
  declarations: [
    AppComponent, SearchComponent, DevComponent, ChartExampleComponent, Ds3ExampleComponent
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
