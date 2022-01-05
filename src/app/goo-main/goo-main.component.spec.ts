import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooMainComponent } from './goo-main.component';

describe('GooMainComponent', () => {
  let component: GooMainComponent;
  let fixture: ComponentFixture<GooMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GooMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
