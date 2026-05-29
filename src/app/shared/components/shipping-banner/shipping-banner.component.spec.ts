import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingBannerComponent } from './shipping-banner.component';

describe('ShippingBannerComponent', () => {
  let component: ShippingBannerComponent;
  let fixture: ComponentFixture<ShippingBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShippingBannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShippingBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
