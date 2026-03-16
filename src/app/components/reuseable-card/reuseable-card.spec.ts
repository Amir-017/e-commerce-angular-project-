import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReuseableCard } from './reuseable-card';

describe('ReuseableCard', () => {
  let component: ReuseableCard;
  let fixture: ComponentFixture<ReuseableCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReuseableCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ReuseableCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
