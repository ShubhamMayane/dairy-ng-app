import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAllProductsComponent } from './home-all-products.component';

describe('HomeAllProductsComponent', () => {
  let component: HomeAllProductsComponent;
  let fixture: ComponentFixture<HomeAllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAllProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
