import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productCategories, ProductCategory, otherProducts, OtherProduct, solarProductBenefits, company } from '../../data';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  readonly productCategories: ProductCategory[] = productCategories;
  readonly otherProducts: OtherProduct[] = otherProducts;
  readonly solarProductBenefits = solarProductBenefits;
  readonly company = company;

  expandedOtherProduct: number | null = null;

  toggleOtherProduct(index: number): void {
    this.expandedOtherProduct = this.expandedOtherProduct === index ? null : index;
  }
}