import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { EmailComponent } from './email/email.component';
import { TopbarComponent } from './topbar/topbar.component';
import { ProfileComponent } from './profile/profile.component';



import { SearchBarDirective } from './search-bar.directive';
import { LoginPageComponent } from './login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    EmailComponent,
    TopbarComponent,
    ProfileComponent,
    SearchBarDirective,
    LoginPageComponent,
    
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
