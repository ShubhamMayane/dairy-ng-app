import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOurPromoComponent } from './product-our-promo.component';

describe('ProductOurPromoComponent', () => {
  let component: ProductOurPromoComponent;
  let fixture: ComponentFixture<ProductOurPromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOurPromoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOurPromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
