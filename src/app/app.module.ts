import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { NavService } from './nav.service';
import { ApiBackendService } from './api-backend.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from '../environments/environment';

import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeButtonModule,
    MaterializeCardModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
             return localStorage.getItem('access_token');},
        whitelistedDomains: [
          '127.0.0.1:8000/'
        ],
        blacklistedRoutes: [
          `${environment.API_BASE_URL}/auth/login`,
          `${environment.API_BASE_URL}/auth/signup`,
        ]
      }
    })
  ],
  providers: [
    NavService,
    ApiBackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
