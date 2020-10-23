import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxCpcFormComponent } from './max-cpc-form.component';

describe('MaxCpcFormComponent', () => {
  let component: MaxCpcFormComponent;
  let fixture: ComponentFixture<MaxCpcFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxCpcFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxCpcFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
