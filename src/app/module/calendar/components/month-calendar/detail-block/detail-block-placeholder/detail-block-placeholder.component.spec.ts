import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBlockPlaceholderComponent } from './detail-block-placeholder.component';

describe('DetailBlockPlaceholderComponent', () => {
  let component: DetailBlockPlaceholderComponent;
  let fixture: ComponentFixture<DetailBlockPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBlockPlaceholderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBlockPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
