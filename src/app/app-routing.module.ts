import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdGroupTableComponent } from './ad-group-table/ad-group-table.component';
import { MaxCpcFormComponent } from './max-cpc-form/max-cpc-form.component';

const routes: Routes = [
  {path: "", component:AdGroupTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
