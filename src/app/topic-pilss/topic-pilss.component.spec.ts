import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicPilssComponent } from './topic-pilss.component';

describe('TopicPilssComponent', () => {
  let component: TopicPilssComponent;
  let fixture: ComponentFixture<TopicPilssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopicPilssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicPilssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
