import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.css']
})
export class EditStoryComponent implements OnInit {
  storyId!: number;
  story!: Story;
  id = new FormControl('');

  constructor(private route: ActivatedRoute, private router: Router ,private storyService: StoryService) {
    
   }

  ngOnInit(): void {
   this.storyId = this.route.snapshot.params['id'];
   this.storyService.getStoryById(this.storyId).subscribe((data:Story) => {
     this.story = data;
   })

   
  }

  editStoryForm = new FormGroup({
    
    title: new FormControl('', [Validators.required]),
    fullStory: new FormControl('', [Validators.required]),
    imageUrl: new FormControl('')
  })

  get f(){
    return this.editStoryForm.controls;
  }


  editStory() {
    const data: Story =
    {
      id: this.storyId,
      title: this.title?.value,
      fullStory: this.fullStory?.value,
      imageUrl: this.imageUrl?.value
    }

    this.storyService.updateStory(data).subscribe(data =>{
      this.router.navigate(["stories"])
    });
  }

 

  get title() {
    return this.editStoryForm.get('title');
  }
  get fullStory() {
    return this.editStoryForm.get('fullStory');
  }
  get imageUrl() {
    return this.editStoryForm.get('imageUrl');
  }
}
