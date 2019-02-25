import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseComponent } from './course/course.component';
import {SignupFormComponent} from './signup-form/signup-form.component';
import { SignupReactFormComponent } from './signup-react-form/signup-react-form.component';
import { NewcourseformComponent } from './newcourseform/newcourseform.component';
import { PostsComponent } from './posts/posts.component';
import {AppErrorHandler} from './common/app-errors-handler';
import {ErrorHandler} from '@angular/core';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    CourseComponent,
    SignupFormComponent,
    SignupReactFormComponent,
    NewcourseformComponent,
    PostsComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
