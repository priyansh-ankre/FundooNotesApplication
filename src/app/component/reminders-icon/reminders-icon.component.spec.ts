import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemindersIconComponent } from './reminders-icon.component';

describe('RemindersIconComponent', () => {
  let component: RemindersIconComponent;
  let fixture: ComponentFixture<RemindersIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemindersIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemindersIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
