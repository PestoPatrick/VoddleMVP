import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VideoComponent } from './content/video/video.component';
import { ContentComponent } from './content/content.component';
import { DescriptionComponent } from './content/description/description.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { ValidatorDirective } from './validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    ContentComponent,
    DescriptionComponent,
    SigninComponent,
    SignupComponent,
    NavigationComponent,
    ValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
