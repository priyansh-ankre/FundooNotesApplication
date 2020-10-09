import { RemindersComponent } from './component/reminders/reminders.component';
import { TrashComponent } from './component/trash/trash.component';
import { LabelComponent } from './component/label/label.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { NoteComponent } from './component/note/note.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardsComponent } from './component/dashboards/dashboards.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  {
    path: 'dashboard', component: DashboardsComponent,
    children: [
      { path: '', component: NoteComponent },
      {path:'archive',component:ArchiveComponent},
      {path: 'label',component:LabelComponent},
      {path:'trash',component:TrashComponent},
      {path:'reminders',component:RemindersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appRoutingModule = RouterModule.forRoot(routes);
