import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionsListesComponent } from './collections-listes.component';

describe('CollectionsListesComponent', () => {
  let component: CollectionsListesComponent;
  let fixture: ComponentFixture<CollectionsListesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionsListesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionsListesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
