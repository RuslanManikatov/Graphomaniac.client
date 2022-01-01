import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CreateStoryComponent } from './stories/create-story/create-story.component';
import { StoryService } from './services/story.service';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ListStoriesComponent } from './stories/list-stories/list-stories.component';
import { DatailsStoryComponent } from './stories/datails-story/datails-story.component';
import { EditStoryComponent } from './stories/edit-story/edit-story.component';
import { ErrorInterceptorService } from './services/error-interceptor.service';
import { PublicPageComponent } from './public-page/public-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CreateStoryComponent,
    ListStoriesComponent,
    DatailsStoryComponent,
    EditStoryComponent,
    PublicPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService, 
    StoryService, 
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
