import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import {DevComponent} from './dev/dev.component';
import {SearchComponent} from './search/search.component';

const routes: Routes = [
    {path: 'dev', component: DevComponent},
    {path: 'search', component: SearchComponent},
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
