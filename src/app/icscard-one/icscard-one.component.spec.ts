import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcscardOneComponent } from './icscard-one.component';

describe('IcscardOneComponent', () => {
  let component: IcscardOneComponent;
  let fixture: ComponentFixture<IcscardOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcscardOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcscardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
