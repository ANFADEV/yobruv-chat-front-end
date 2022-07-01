import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { ChatComponent } from './components/pages/chat/chat.component';
import { SettingsComponent } from './components/pages/settings/settings.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DiscussionsComponent,
    ContactsComponent,
    ChatComponent,
    SettingsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
