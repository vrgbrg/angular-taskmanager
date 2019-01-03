import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditTaskComponent } from './create-edit-task.component';

describe('CreateEditTaskComponent', () => {
  let component: CreateEditTaskComponent;
  let fixture: ComponentFixture<CreateEditTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEditTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
