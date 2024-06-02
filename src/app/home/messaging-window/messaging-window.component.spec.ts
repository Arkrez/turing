import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagingWindowComponent } from './messaging-window.component';

describe('MessagingWindowComponent', () => {
  let component: MessagingWindowComponent;
  let fixture: ComponentFixture<MessagingWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagingWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagingWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
