import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOurShopComponent } from './product-our-shop.component';

describe('ProductOurShopComponent', () => {
  let component: ProductOurShopComponent;
  let fixture: ComponentFixture<ProductOurShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductOurShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductOurShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
