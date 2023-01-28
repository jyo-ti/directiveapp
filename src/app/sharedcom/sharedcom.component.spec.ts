import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcomComponent } from './sharedcom.component';

describe('SharedcomComponent', () => {
  let component: SharedcomComponent;
  let fixture: ComponentFixture<SharedcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
