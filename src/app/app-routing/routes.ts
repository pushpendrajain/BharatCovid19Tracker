import { Routes } from '@angular/router';

import { DistrictComponent } from '../district/district.component';
import { StateComponent } from '../state/state.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { IndiaComponent } from '../india/india.component';

export const routes: Routes = [
  {path: 'india', component: IndiaComponent},
  {path: 'state', component: StateComponent},
  {path: 'about', component: AboutComponent},
  {path: 'state/:id', component: DistrictComponent},
  {path: 'contactus', component: ContactComponent},

  {path: '', redirectTo: '/india', pathMatch: 'full'}
];
