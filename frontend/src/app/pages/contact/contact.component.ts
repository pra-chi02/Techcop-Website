import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { company, faqs, productCategories, ProductCategory, companyMapsUrl } from '../../data';
import { FaqAccordionComponent } from '../../components/faq-accordion/faq-accordion.component';
import { environment } from '../../../environments/environment';

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  message: string;
  website: string; // honeypot field — must stay empty; bots tend to fill every field
}

interface SavedEnquiry {
  id: number;
  name: string;
  phone: string;
  email: string;
  productInterest: string;
  message: string;
  submittedAt: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, FaqAccordionComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly company = company;
  readonly companyMapsUrl = companyMapsUrl;
  readonly faqs = faqs;
  readonly productCategories: ProductCategory[] = productCategories;

  submitting = false;
  submitError: string | null = null;
  submittedEnquiry: SavedEnquiry | null = null;

  contactForm: ContactForm = this.emptyForm();
  private formRenderedAt = Date.now();

  constructor(private http: HttpClient) {}

  private emptyForm(): ContactForm {
    this.formRenderedAt = Date.now();
    return {
      name: '',
      phone: '',
      email: '',
      productInterest: this.productCategories[0]?.name ?? '',
      message: '',
      website: '',
    };
  }

  onSubmitEnquiry(event: Event): void {
    event.preventDefault();
    this.submitError = null;
    this.submitting = true;

    const payload = { ...this.contactForm, formRenderedAt: this.formRenderedAt };

    this.http.post<SavedEnquiry>(`${environment.apiUrl}/enquiries`, payload).subscribe({
      next: (saved) => {
        this.submitting = false;
        this.submittedEnquiry = saved;
        this.contactForm = this.emptyForm();
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.submitError =
          err.error?.details?.join(', ') ||
          err.error?.error ||
          'Something went wrong while submitting your enquiry. Please check that the backend server is running, or call us directly.';
      },
    });
  }

  startNewEnquiry(): void {
    this.submittedEnquiry = null;
    this.submitError = null;
  }
}
