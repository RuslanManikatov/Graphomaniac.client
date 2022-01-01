import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { Story } from 'src/app/models/story';
import { StoryService } from 'src/app/services/story.service';

@Component({
  selector: 'app-datails-story',
  templateUrl: './datails-story.component.html',
  styleUrls: ['./datails-story.component.css']
})
export class DatailsStoryComponent implements OnInit {
  private storyId: number = 0;
  story: any;

  constructor(private route: ActivatedRoute, private storyService: StoryService) {

    this.fetchData();
   }

   fetchData() {
     this.route.params.pipe(map(params => {
       const id = params['id'];
       return id;
     }), mergeMap(id => this.storyService.getStoryById(id))).subscribe(res => {
       this.story = res;
     })
   }

  ngOnInit(): void {
  }

}
