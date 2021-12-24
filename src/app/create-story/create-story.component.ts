import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-story',
  templateUrl: './create-story.component.html',
  styleUrls: ['./create-story.component.css']
})
export class CreateStoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  createStoryForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    story:    new FormControl('',[Validators.required]),
    imageUrl: new FormControl('',[Validators.required])
  })

  createStory(){
    // this.authService.register(this.registerForm.value).subscribe(data =>{
    //   console.log(data);
    // });
  }
  
  get title(){
    return this.createStoryForm.get('title');
  }
  get story(){
    return this.createStoryForm.get('story');
  }
  get imageUrl(){
    return this.createStoryForm.get('imageUrl');
  }
}
