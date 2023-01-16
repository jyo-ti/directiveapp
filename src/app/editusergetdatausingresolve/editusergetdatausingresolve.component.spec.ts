import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusergetdatausingresolveComponent } from './editusergetdatausingresolve.component';

describe('EditusergetdatausingresolveComponent', () => {
  let component: EditusergetdatausingresolveComponent;
  let fixture: ComponentFixture<EditusergetdatausingresolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusergetdatausingresolveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusergetdatausingresolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
