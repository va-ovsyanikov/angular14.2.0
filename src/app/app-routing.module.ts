import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { SummaryComponent } from './pages/summary/summary.component';


const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'navigator', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
