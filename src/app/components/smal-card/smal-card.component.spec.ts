import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmalCardComponent } from './smal-card.component';

describe('SmalCardComponent', () => {
  let component: SmalCardComponent;
  let fixture: ComponentFixture<SmalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmalCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
