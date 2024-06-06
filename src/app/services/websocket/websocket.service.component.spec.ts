import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketServiceComponent } from './websocket.service.component';

describe('WebsocketServiceComponent', () => {
  let component: WebsocketServiceComponent;
  let fixture: ComponentFixture<WebsocketServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsocketServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsocketServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
