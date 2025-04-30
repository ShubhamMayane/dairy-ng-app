import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesProductComponent } from './pages-product.component';

describe('PagesProductComponent', () => {
  let component: PagesProductComponent;
  let fixture: ComponentFixture<PagesProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagesProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
