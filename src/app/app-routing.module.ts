import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinishedComponent } from './finished/finished.component';
import { ListComponent } from './list/list.component';
import { ManageComponent } from './manage/manage.component';
import { OverdueComponent } from './overdue/overdue.component';
import { TodayComponent } from './today/today.component';

const routes: Routes = [
  {path: '',  component: TodayComponent , pathMatch: 'full'},
  {path: 'all',  component: ListComponent},
  {path: 'finished',  component: FinishedComponent},
  {path: 'manage',  component: ManageComponent},
  {path: 'overdue',  component: OverdueComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
