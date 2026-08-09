import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { productCategories, ProductCategory, solarPumpTypes, company } from '../../data';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  readonly allCategories: ProductCategory[] = productCategories;
  readonly solarPumpTypes = solarPumpTypes;
  readonly company = company;
  product: ProductCategory | undefined;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug');
      this.product = this.allCategories.find((p) => p.slug === slug);
      if (!this.product) {
        this.router.navigateByUrl('/products');
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  get relatedProducts(): ProductCategory[] {
    if (!this.product) return [];
    return this.allCategories.filter((p) => p.slug !== this.product!.slug).slice(0, 3);
  }
}
