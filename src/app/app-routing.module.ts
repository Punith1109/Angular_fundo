import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { TrashComponent } from './trash/trash.component';
import { NotecardComponent } from './notecard/notecard.component';

const routes: Routes = [
  {
path:"",
component:SigninComponent
  },
  {path:"signup",
  component:SignupComponent},
  {path:"dashboard",
  component:DashboardComponent,
  children: [
    {
      path: "notes",
      component: NotesContainerComponent
    },
    {
      path: "trash",
      component: TrashComponent
    },
    {
      path: "notecard",
      component: NotecardComponent
    },
    
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
