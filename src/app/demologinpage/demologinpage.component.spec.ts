import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemologinpageComponent } from './demologinpage.component';

describe('DemologinpageComponent', () => {
  let component: DemologinpageComponent;
  let fixture: ComponentFixture<DemologinpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemologinpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemologinpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
