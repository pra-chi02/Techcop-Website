import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { TrustBarComponent } from '../../components/trust-bar/trust-bar.component';
import { FaqAccordionComponent } from '../../components/faq-accordion/faq-accordion.component';
import {
  aboutParagraphs,
  productCategories,
  ProductCategory,
  whyChooseUs,
  WhyChooseUsItem,
  clients,
  stats,
  StatItem,
  faqs,
  company,
  processSteps,
  ProcessStep,
} from '../../data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, HeroComponent, TrustBarComponent, FaqAccordionComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly aboutParagraphs = aboutParagraphs.slice(0, 2);
  readonly productCategories: ProductCategory[] = productCategories;
  readonly whyChooseUs: WhyChooseUsItem[] = whyChooseUs;
  readonly clients = clients;
  readonly stats: StatItem[] = stats;
  readonly faqs = faqs;
  readonly company = company;
  readonly processSteps: ProcessStep[] = processSteps;
}
