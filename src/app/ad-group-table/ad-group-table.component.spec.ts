import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdGroupTableComponent } from './ad-group-table.component';

describe('AdGroupTableComponent', () => {
  let component: AdGroupTableComponent;
  let fixture: ComponentFixture<AdGroupTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdGroupTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdGroupTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
