import { Component, signal } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { ShippingBannerComponent } from '../../shared/components/shipping-banner/shipping-banner.component';
import { ProductHeroComponent } from '../../shared/components/product-hero/product-hero.component';
import { ProductDescriptionComponent } from '../../shared/components/product-description/product-description.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [NavbarComponent, ShippingBannerComponent, ProductHeroComponent, ProductDescriptionComponent, FooterComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  selectedVersion = signal('switch')
}
