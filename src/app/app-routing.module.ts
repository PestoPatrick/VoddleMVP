import { NgModule } from '@angular/core';
import {SignupComponent} from './signup/signup.component';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent },
  {path: 'home', component: ContentComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
