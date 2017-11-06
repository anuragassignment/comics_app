import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { ROUTES } from './app.routes';

import { AuthService } from './auth/auth.service';
import { CallbackComponent } from './callback/callback.component';
import { ComicsComponent } from './comics/comics.component';
import { CharacterComponent } from './character/character.component';
import { AuthGuardService } from './auth-guard.service';
import { DataService } from './services/data.service';
import { CachedService } from './services/cached.service';
import { ComicsDetailsComponent } from './comics/comics-details/comics-details.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { CreatorsComponent } from './comics/comics-details/creators/creators.component';
import { AllcomComponent } from './character/character-details/allcom/allcom.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent,
    ComicsComponent,
    CharacterComponent,
    ComicsDetailsComponent,
    CharacterDetailsComponent,
    CreatorsComponent,
    AllcomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthService, AuthGuardService, DataService, CachedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
