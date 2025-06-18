import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductslistesComponent } from './productslistes.component';

describe('ProductslistesComponent', () => {
  let component: ProductslistesComponent;
  let fixture: ComponentFixture<ProductslistesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductslistesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductslistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
