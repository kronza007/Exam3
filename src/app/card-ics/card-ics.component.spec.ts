import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardIcsComponent } from './card-ics.component';

describe('CardIcsComponent', () => {
  let component: CardIcsComponent;
  let fixture: ComponentFixture<CardIcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardIcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardIcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
