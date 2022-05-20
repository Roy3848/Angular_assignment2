import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FeatureModule } from '../feature/feature.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent,
    UnauthorizedComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FeatureModule,
    ReactiveFormsModule
    
  ]
})

export class AuthModule {
  constructor(){
    console.warn("Auth module loaded")
  }
 }