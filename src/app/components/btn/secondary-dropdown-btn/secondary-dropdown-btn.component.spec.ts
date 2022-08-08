import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryDropdownBtnComponent } from './secondary-dropdown-btn.component';

describe('SecondaryDropdownBtnComponent', () => {
  let component: SecondaryDropdownBtnComponent;
  let fixture: ComponentFixture<SecondaryDropdownBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondaryDropdownBtnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryDropdownBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
