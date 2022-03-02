import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMaterialModule } from 'src/app/angular-material.module';

import { httpInterceptorProviders } from './interceptors';

import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { DetailComponent } from './components/detail/detail.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DetailComponent,
    ContactsComponent,    
    ConfigurationComponent
  ],
  exports: [
    ListComponent,
    ItemComponent,
    DetailComponent,
    ContactsComponent,    
    ConfigurationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  providers: [
    httpInterceptorProviders
  ]
})
export class SharedModule { }
