import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavLink, navLinks, company, productCategories, ProductCategory } from '../../data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  readonly navLinks: NavLink[] = navLinks;
  readonly company = company;
  readonly productCategories: ProductCategory[] = productCategories;
  mobileMenuOpen = false;
  mobileProductsOpen = false;
  productsDropdownOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
    if (!this.mobileMenuOpen) {
      this.mobileProductsOpen = false;
    }
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
    this.mobileProductsOpen = false;
  }

  toggleMobileProducts(): void {
    this.mobileProductsOpen = !this.mobileProductsOpen;
  }
}
