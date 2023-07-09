import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerViewComponent } from './joker-view.component';

describe('JokerViewComponent', () => {
  let component: JokerViewComponent;
  let fixture: ComponentFixture<JokerViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokerViewComponent]
    });
    fixture = TestBed.createComponent(JokerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
