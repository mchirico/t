import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';

import {ChartExampleComponent} from './chart-example/chart-example.component';
import {Ds3ExampleComponent} from './ds3-example/ds3-example.component';


const routes: Routes = [
    {path: 'dev', component: DevComponent},
    {path: 'search', component: SearchComponent},
    {path: 'chart', component: ChartExampleComponent},
    {path: 'ds3', component: Ds3ExampleComponent},
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
