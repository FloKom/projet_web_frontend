import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscusViewComponent } from './discus-view.component';

describe('DiscusViewComponent', () => {
  let component: DiscusViewComponent;
  let fixture: ComponentFixture<DiscusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscusViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
