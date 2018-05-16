import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionscaleComponent } from './questionscale.component';

describe('QuestionscaleComponent', () => {
  let component: QuestionscaleComponent;
  let fixture: ComponentFixture<QuestionscaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionscaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionscaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
