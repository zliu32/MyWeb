import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './register/register.component';
import { ScoretableComponent } from './scoretable/scoretable.component';
import { JournalComponent } from './journal/journal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SlideshowModule} from 'ng-simple-slideshow';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ScoretableComponent,
    JournalComponent,
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SliderModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlideshowModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
