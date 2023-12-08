import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSeventhComponent } from './section-seventh.component';

describe('SectionSeventhComponent', () => {
  let component: SectionSeventhComponent;
  let fixture: ComponentFixture<SectionSeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionSeventhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
