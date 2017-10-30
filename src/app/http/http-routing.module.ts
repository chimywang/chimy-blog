import { NgModule } from '@angular/core';
import { Routes,
         RouterModule } from '@angular/router';

import {MyHttpComponent} from './http.component';

const routes: Routes = [
  { path: '', redirectTo: 'http', pathMatch: 'full'},
  { path: 'http',    component: MyHttpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpRoutingModule {}
