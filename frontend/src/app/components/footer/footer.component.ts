import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavLink, navLinks, company, productCategories, ProductCategory } from '../../data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  readonly navLinks: NavLink[] = navLinks;
  readonly company = company;
  readonly productCategories: ProductCategory[] = productCategories;
  readonly currentYear = new Date().getFullYear();
}
