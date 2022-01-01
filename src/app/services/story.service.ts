import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Story } from '../models/story';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private storyPath = environment.apiUrl + 'stories'

  constructor(private http: HttpClient, private authService: AuthService) { }

  createStory(data: any): Observable<Story>{
    return this.http.post<Story>(this.storyPath, data);
  }

  getStoriesByUserId(): Observable<Array<Story>>{
    return this.http.get<Array<Story>>(this.storyPath)
  }

  getStoryById(id: number): Observable<Story>{
    return this.http.get<Story>(this.storyPath + '/' + id)
  }

  deleteStory(id: number){
    return this.http.delete(this.storyPath + '/' + id)
  }

  updateStory(data:any): Observable<any> {
    return this.http.put(this.storyPath, data)
  }
}
