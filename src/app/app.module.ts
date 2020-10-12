import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardsComponent } from './component/dashboards/dashboards.component' ;
import {MatDialogModule} from '@angular/material/dialog';
import { CreateNoteComponent } from './component/create-note/create-note.component';
import { DisplayNoteComponent } from './component/display-note/display-note.component';
import { NoteComponent } from './component/note/note.component';
import { RemindersComponent } from './component/reminders/reminders.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { LabelComponent } from './component/label/label.component';
import { TrashComponent } from './component/trash/trash.component';
import { RemindersIconComponent } from './component/reminders-icon/reminders-icon.component';
import { ArchiveIconComponent } from './component/archive-icon/archive-icon.component';
import { DeleteIconComponent } from './component/delete-icon/delete-icon.component';
import { ColorPalleteComponent } from './component/color-pallete-icon/color-pallete.component';
import { EditNoteComponent } from './component/edit-note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardsComponent,
    CreateNoteComponent,
    DisplayNoteComponent,
    NoteComponent,
    RemindersComponent,
    ArchiveComponent,
    LabelComponent,
    TrashComponent,
    RemindersIconComponent,
    ArchiveIconComponent,
    DeleteIconComponent,
    ColorPalleteComponent,
    EditNoteComponent,
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
