import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStoryComponent } from './stories/create-story/create-story.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListStoriesComponent } from './stories/list-stories/list-stories.component';
import { DatailsStoryComponent } from './stories/datails-story/datails-story.component';
import { EditStoryComponent } from './stories/edit-story/edit-story.component';
import { PublicPageComponent } from './public-page/public-page.component';

const routes: Routes = [
  {path: '', component: PublicPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'createstory', component: CreateStoryComponent, canActivate: [AuthGuardService]},
  {path: 'stories', component: ListStoriesComponent, canActivate: [AuthGuardService]},
  {path: 'stories/:id', component: DatailsStoryComponent, canActivate: [AuthGuardService]},
  {path: 'stories/:id/edit', component: EditStoryComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
