import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Compontente13Component } from './compontente13.component';

describe('Compontente13Component', () => {
  let component: Compontente13Component;
  let fixture: ComponentFixture<Compontente13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Compontente13Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Compontente13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
