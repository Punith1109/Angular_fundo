import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './createnote/createnote.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TrashComponent } from './trash/trash.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { NotecardComponent } from './notecard/notecard.component';
import { KeepViewComponent } from './keep-view/keep-view.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ArchiveComponent } from './archive/archive.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    CreateNoteComponent,
    DashboardComponent,
    SidenavComponent,
    TrashComponent,
    NotesContainerComponent,
    NotecardComponent,
    KeepViewComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressSpinnerModule 
  ],
  providers: [],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }