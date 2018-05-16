import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { BodyComponent } from '../body/body.component';
import { QuestionComponent } from '../question/question.component';

import { AuthService } from '../services/auth.service';
import { AuthBodypartService } from '../services/auth-bodypart.service';
import { FinishComponent } from '../finish/finish.component';
import { QuestionscaleComponent } from'../questionscale/questionscale.component';

const routes: Routes = [
    {
        path: 'login',
        component : LoginComponent,
        canActivate: [AuthBodypartService],
    },
    {
        path: 'home',
        component : HomeComponent,
        canActivate: [AuthService],
    },
    {
      path:'question',
      component :QuestionComponent,
      canActivate:[AuthService]

    },
    {
      path:'questionscale',
      component :QuestionscaleComponent,
      canActivate:[AuthService]
    },
    {
      path:'finish',
      component:FinishComponent,
      canActivate:[AuthService]
    },
    {
      path: 'bodypart',
      component : BodyComponent
    },
    {
      path: '',
      redirectTo: 'bodypart',
      pathMatch: 'full'
    },
  
  ];
  
  @NgModule({
      imports: [CommonModule, RouterModule.forRoot(routes) ],
      exports: [ RouterModule ]
  })

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})

export class Rout {
}
