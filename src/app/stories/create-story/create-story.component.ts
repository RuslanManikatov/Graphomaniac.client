import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StoryService } from '../../services/story.service';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  constructor(private storyService: StoryService, private router: Router) { }

  ngOnInit(): void {
  }

  createStoryForm = new FormGroup({
    title:      new FormControl('',[Validators.required]),
    fullStory:  new FormControl('',[Validators.required]),
    imageUrl:   new FormControl('')
  })

  createStory(){
    this.storyService.createStory(this.createStoryForm.value).subscribe(data =>{
      this.router.navigate(["stories"])
    });
  }
  
  get title(){
    return this.createStoryForm.get('title');
  }
  get fullStory(){
    return this.createStoryForm.get('fullStory');
  }
  get imageUrl(){
    return this.createStoryForm.get('imageUrl');
  }
}
