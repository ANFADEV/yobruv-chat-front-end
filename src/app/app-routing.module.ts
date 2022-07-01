import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/pages/chat/chat.component';
import { ContactsComponent } from './components/pages/contacts/contacts.component';
import { DiscussionsComponent } from './components/pages/discussions/discussions.component';
import { LoginComponent } from './components/pages/login/login.component';
import { SettingsComponent } from './components/pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path:'discussions',
    component: DiscussionsComponent,
  },
  {
    path:'contacts',
    component: ContactsComponent,
  },
  {
    path:'settings',
    component: SettingsComponent,
  },
  {
    path:'chat',
    component: ChatComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
