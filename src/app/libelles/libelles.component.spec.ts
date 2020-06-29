import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibellesComponent } from './libelles.component';

describe('LibellesComponent', () => {
  let component: LibellesComponent;
  let fixture: ComponentFixture<LibellesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibellesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
