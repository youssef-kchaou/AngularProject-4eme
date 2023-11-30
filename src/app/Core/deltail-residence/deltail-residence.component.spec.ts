import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeltailResidenceComponent } from './deltail-residence.component';

describe('DeltailResidenceComponent', () => {
  let component: DeltailResidenceComponent;
  let fixture: ComponentFixture<DeltailResidenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeltailResidenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeltailResidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
