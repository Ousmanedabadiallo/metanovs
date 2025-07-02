import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarqueslistesComponent } from './marqueslistes.component';

describe('MarqueslistesComponent', () => {
  let component: MarqueslistesComponent;
  let fixture: ComponentFixture<MarqueslistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarqueslistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarqueslistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
