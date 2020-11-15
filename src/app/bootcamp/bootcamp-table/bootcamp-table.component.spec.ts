import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootcampTableComponent } from './bootcamp-table.component';

describe('BootcampTableComponent', () => {
  let component: BootcampTableComponent;
  let fixture: ComponentFixture<BootcampTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootcampTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootcampTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
