import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosCreateComponent } from './videos-create.component';

describe('VideosCreateComponent', () => {
  let component: VideosCreateComponent;
  let fixture: ComponentFixture<VideosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
