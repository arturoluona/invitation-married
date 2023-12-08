import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionEighthComponent } from './section-eighth.component';

describe('SectionEighthComponent', () => {
  let component: SectionEighthComponent;
  let fixture: ComponentFixture<SectionEighthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionEighthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionEighthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
