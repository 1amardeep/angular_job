import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokerElementsViewComponent } from './joker-elements-view.component';

describe('JokerElementsViewComponent', () => {
  let component: JokerElementsViewComponent;
  let fixture: ComponentFixture<JokerElementsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JokerElementsViewComponent]
    });
    fixture = TestBed.createComponent(JokerElementsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
