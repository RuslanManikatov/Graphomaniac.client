import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStoryComponent } from './create-story/create-story.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'createstory', component: CreateStoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
