import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsStoryComponent } from './datails-story.component';

describe('DatailsStoryComponent', () => {
  let component: DatailsStoryComponent;
  let fixture: ComponentFixture<DatailsStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatailsStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
