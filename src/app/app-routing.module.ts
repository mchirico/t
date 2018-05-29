import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';

import {ChartExampleComponent} from './chart-example/chart-example.component';

const routes: Routes = [
    {path: 'dev', component: DevComponent},
    {path: 'search', component: SearchComponent},
    {path: 'chart', component: ChartExampleComponent},
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
