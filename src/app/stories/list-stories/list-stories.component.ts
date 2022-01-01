import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-list-stories',
  templateUrl: './list-stories.component.html',
  styleUrls: ['./list-stories.component.css']
})
export class ListStoriesComponent implements OnInit {

  stories: Array<Story> = [];

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit(): void {
    this.fetchStories();
  }

  fetchStories(){
    this.storyService.getStoriesByUserId().subscribe(stories => {
      this.stories = stories;
    })
  }

  createStory(){
    this.router.navigate(["createstory"])
  }

  editStory(id: number){
    this.router.navigate(["stories/" + id +"/edit"])
  }

  viewStory(id: number){
    this.router.navigate(["stories", id])
  }

  deleteStory(id: number){
    this.storyService.deleteStory(id).subscribe(res => {
      this.fetchStories();
    })
  }
}
