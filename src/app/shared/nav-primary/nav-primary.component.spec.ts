import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPrimaryComponent } from './nav-primary.component';

describe('NavPrimaryComponent', () => {
  let component: NavPrimaryComponent;
  let fixture: ComponentFixture<NavPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
