import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink, navLinks, company, productCategories, ProductCategory, companyMapsUrl } from '../../data';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly navLinks: NavLink[] = navLinks;
  readonly company = company;
  readonly companyMapsUrl = companyMapsUrl;
  readonly productCategories: ProductCategory[] = productCategories;
  readonly currentYear = new Date().getFullYear();

  constructor(public translate: TranslationService) {}
}
