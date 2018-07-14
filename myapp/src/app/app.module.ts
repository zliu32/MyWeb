import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { ScoretableComponent } from './scoretable/scoretable.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlideshowModule } from './homepage/slideshow/slideshow.module';
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { BlogComponent } from './blog/blog.component';
import { QuillEditorModule } from 'ngx-quill-editor';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { CalendarComponent } from './blog/calendar/calendar.component';
import { EditorComponent } from './blog/editor/editor.component';
import { BlogBoxComponent } from './blog/blog-box/blog-box.component';
import { RuletableComponent } from './ruletable/ruletable.component';
import { DashboardComponent } from './dashboard/dashboard.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CalendarComponent,
    ScoretableComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    EditorComponent,
    BlogBoxComponent,
    RuletableComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SlideshowModule,
    QuillEditorModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NgxChartsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
