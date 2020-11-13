import { NgModule } from '@angular/core';
import {RegisterComponent} from './register/register.component';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent },
  {path: 'home', component: ContentComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
