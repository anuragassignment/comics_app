import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { ComicsComponent } from './comics/comics.component';
import { CharacterComponent } from './character/character.component';
import { AuthGuardService } from './auth-guard.service';
import { ComicsDetailsComponent } from './comics/comics-details/comics-details.component';
import { CharacterDetailsComponent } from './character/character-details/character-details.component';
import { AllcomComponent } from './character/character-details/allcom/allcom.component';
import { CreatorsComponent } from './comics/comics-details/creators/creators.component';

export const ROUTES: Routes = [
  { path: 'characters/:id/comics', canActivate: [AuthGuardService], component: AllcomComponent },
  { path: 'comics/:id/creators', canActivate: [AuthGuardService], component: CreatorsComponent },
  { path: 'characters/:id', canActivate: [AuthGuardService], component: CharacterDetailsComponent },
  { path: 'comics/:id', canActivate: [AuthGuardService], component: ComicsDetailsComponent },
  { path: 'comics', canActivate: [AuthGuardService], component: ComicsComponent },
  { path: 'characters', canActivate: [AuthGuardService], component: CharacterComponent },
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
