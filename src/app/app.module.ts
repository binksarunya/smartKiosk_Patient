import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatInput } from '@angular/material'
import { MatFormFieldModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule, MatNativeDateModule } from '@angular/material';
import { MatSliderModule } from '@angular/material/slider';

import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';


import { Rout } from './router/rout.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import { LoginService } from './services/login.service';
import { AuthService } from './services/auth.service';
import { BodypartService } from './services/bodypart.service';
import { AuthBodypartService } from './services/auth-bodypart.service';
import { DiagnosisService } from './services/diagnosis.service';

import { HomeComponent } from './home/home.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { BodyComponent } from './body/body.component';
import { QuestionComponent } from './question/question.component';
import { FinishComponent } from './finish/finish.component';
import { QuestionscaleComponent } from './questionscale/questionscale.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NewPatientComponent,
    PatientListComponent,
    BodyComponent,
    QuestionComponent,
    FinishComponent,
    QuestionscaleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatRadioModule,
    MatCardModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSliderModule,
    HttpModule,
    Ng2SearchPipeModule,
    Rout
  ],
  providers: [
    LoginService,
    AuthService,
    BodypartService,
    AuthBodypartService,
    DiagnosisService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
