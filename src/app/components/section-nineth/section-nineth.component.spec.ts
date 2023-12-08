import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNinethComponent } from './section-nineth.component';

describe('SectionNinethComponent', () => {
  let component: SectionNinethComponent;
  let fixture: ComponentFixture<SectionNinethComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNinethComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionNinethComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
