import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { company, stats } from '../../data';
import { environment } from '../../../environments/environment';

interface InfoItem {
  title: string;
  description: string;
}

interface BatteryProduct {
  model: string;
  spec: string;
  note: string;
}

interface DealerForm {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  partnerType: string;
  investment: string;
  message: string;
  website: string; // honeypot, must stay empty
}

@Component({
  selector: 'app-dealership',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './dealership.component.html',
})
export class DealershipComponent {
  readonly company = company;
  readonly stats = stats.slice(0, 4);

  readonly territory = 'Ghaziabad';

  // ---------------------------------------------------------------------------
  // EDIT THESE: all text shown on the page. Keep it accurate to your real terms.
  // ---------------------------------------------------------------------------

  // Models and voltage/capacity are taken from KENT's own product pages.
  readonly batteries: BatteryProduct[] = [
    { model: 'KENT Li Battery A6-1280', spec: '12.8 V / 100 Ah', note: 'Smart LFP battery for home inverters' },
    { model: 'KENT Li Battery A6-2560', spec: '25.6 V / 100 Ah', note: 'Smart LFP battery for home inverters' },
    { model: 'KENT Li Battery A6-3840', spec: '25.6 V / 150 Ah', note: 'Single unit to replace a dual lead-acid setup' },
    { model: 'KENT Lithium Battery (F1 family)', spec: '51.2 V · 5.12 / 11.78 / 16.08 kWh', note: 'Energy storage for hybrid and solar systems' },
  ];

  readonly benefits: InfoItem[] = [
    { title: `Exclusive in ${this.territory}`, description: `We are the only supplier of KENT lithium batteries in ${this.territory}, so you buy from one trusted local source.` },
    { title: 'Genuine KENT Products', description: 'Original KENT batteries, backed by the manufacturer warranty as per the warranty card.' },
    { title: 'Safe, Low-Maintenance Lithium', description: 'Smart LFP batteries with a built-in BMS that need no topping up or regular upkeep.' },
    { title: 'Easy Upgrade From Lead-Acid', description: 'The A6 series works with standard home inverters, so customers can replace lead-acid batteries without changing their inverter.' },
    { title: 'Local Stock & Quick Supply', description: `Stock is held locally for quicker supply to your shop in ${this.territory}.` },
    { title: 'Sales Support & Regular Reviews', description: 'Product information, demo support, target setting and periodic reviews to help you grow.' },
  ];

  readonly partnerTypes: InfoItem[] = [
    { title: 'Retail Distributor', description: `Supply KENT lithium batteries to shops and installers across ${this.territory}.` },
    { title: 'Retail Outlet', description: 'Sell KENT batteries from your own inverter, electrical or appliance shop.' },
    { title: 'Direct Sales Dealer', description: 'Sell directly to homes, offices and businesses that want a lithium backup.' },
    { title: 'Service Franchise', description: 'Handle installation, replacement and service support for customers in your area.' },
  ];

  readonly whoCanJoin: string[] = ['Distributor', 'Retailer', 'Entrepreneur', 'Freelance Sales Agent'];

  readonly requirements: string[] = [
    `Shop or business in ${this.territory} (preferred)`,
    'Experience in inverters, batteries, electrical or solar (preferred)',
    'Space to store and display batteries',
    'Valid GST registration',
    'Willingness to meet agreed sales targets',
  ];

  readonly steps: InfoItem[] = [
    { title: 'Submit Enquiry', description: 'Fill in the form with your business and area details.' },
    { title: 'Call From Our Team', description: 'We call you to understand your market and answer your questions.' },
    { title: 'Terms & Pricing', description: 'We share dealer pricing, supply terms and margins.' },
    { title: 'Start Selling', description: 'Receive stock, product information and ongoing support.' },
  ];

  readonly partnerTypeNames: string[] = this.partnerTypes.map((t) => t.title);

  readonly investmentRanges: string[] = ['Below ₹2 Lakh', '₹2 – 5 Lakh', '₹5 – 10 Lakh', 'Above ₹10 Lakh'];

  submitting = false;
  submitError: string | null = null;
  submitted = false;

  form: DealerForm = this.emptyForm();
  private formRenderedAt = Date.now();

  constructor(private http: HttpClient) {}

  private emptyForm(): DealerForm {
    this.formRenderedAt = Date.now();
    return {
      name: '',
      phone: '',
      email: '',
      city: this.territory,
      state: 'Uttar Pradesh',
      partnerType: this.partnerTypeNames[0],
      investment: this.investmentRanges[0],
      message: '',
      website: '',
    };
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitError = null;
    this.submitting = true;

    const f = this.form;

    // Sent to the dedicated /api/dealership endpoint (saved in the dealership_enquiries table).
    const payload = {
      name: f.name,
      phone: f.phone,
      email: f.email,
      city: f.city,
      state: f.state,
      partnerType: f.partnerType,
      investment: f.investment,
      message: f.message,
      website: f.website,
      formRenderedAt: this.formRenderedAt,
    };

    this.http.post(`${environment.apiUrl}/dealership`, payload).subscribe({
      next: () => {
        this.submitting = false;
        this.submitted = true;
        this.form = this.emptyForm();
      },
      error: (err: HttpErrorResponse) => {
        this.submitting = false;
        this.submitError =
          err.error?.details?.join(', ') ||
          err.error?.error ||
          'Something went wrong while submitting. Please check that the backend server is running, or call us directly.';
      },
    });
  }

  newEnquiry(): void {
    this.submitted = false;
    this.submitError = null;
  }
}