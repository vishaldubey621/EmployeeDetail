import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoinContainerComponent } from './loin-container.component';

describe('LoinContainerComponent', () => {
  let component: LoinContainerComponent;
  let fixture: ComponentFixture<LoinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoinContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
