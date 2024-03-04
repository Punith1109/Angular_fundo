import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SigninComponent } from './signin/signin.component';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive/archive.component';
import { CreateNoteComponent } from './createnote/createnote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TrashComponent } from './trash/trash.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NotecardComponent } from './notecard/notecard.component';
RouterModule


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    ArchiveComponent,
    CreateNoteComponent,
    DashboardComponent,
    SidenavComponent,
    TrashComponent,
    NotesContainerComponent,
    NotecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
