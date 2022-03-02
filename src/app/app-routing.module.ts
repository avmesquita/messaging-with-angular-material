import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactsComponent } from './modules/shared/components/contacts/contacts.component';
import { DetailComponent } from './modules/shared/components/detail/detail.component';
import { ListComponent } from './modules/shared/components/list/list.component';
import { ConfigurationComponent } from './modules/shared/components/configuration/configuration.component';

const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'details/:id',
    component: DetailComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'settings',
    component: ConfigurationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
