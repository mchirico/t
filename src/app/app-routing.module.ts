import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';

import {ChartExampleComponent} from './chart-example/chart-example.component';
import {D3jsExampleComponent} from './d3js-example/d3js-example.component';


const routes: Routes = [
    {path: 'dev', component: DevComponent},
    {path: 'search', component: SearchComponent},
    {path: 'chart', component: ChartExampleComponent},
    {path: 'ds3', component: D3jsExampleComponent},
    {path: '', redirectTo: '/dev', pathMatch: 'full'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {
}
