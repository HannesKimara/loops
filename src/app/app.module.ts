import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterializeButtonModule, MaterializeCardModule } from 'materialize-angular';
import { NavService } from './nav.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterializeButtonModule,
    MaterializeCardModule
  ],
  providers: [
    NavService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
