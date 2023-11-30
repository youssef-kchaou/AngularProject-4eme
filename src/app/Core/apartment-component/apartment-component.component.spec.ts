import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentComponentComponent } from './apartment-component.component';

describe('ApartmentComponentComponent', () => {
  let component: ApartmentComponentComponent;
  let fixture: ComponentFixture<ApartmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApartmentComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApartmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
