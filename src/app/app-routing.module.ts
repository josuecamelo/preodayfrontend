import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ViewComponent} from './view/view.component';


const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'weather/:id',  component: ViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
