import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { company, productCategories } from '../../data';

type EnquiryStatus = 'New' | 'Contacted' | 'Closed';

interface Enquiry {
  id: number;
  name: string;
  phone: string;
  email: string | null;
  productInterest: string | null;
  message: string | null;
  status: EnquiryStatus;
  submittedAt: string;
}

interface ProductCount {
  name: string;
  count: number;
}

const STORAGE_KEY = 'technocop_admin_key';
const STATUSES: EnquiryStatus[] = ['New', 'Contacted', 'Closed'];

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  readonly company = company;
  readonly statuses = STATUSES;

  adminKey = '';
  authenticated = false;
  loading = false;
  loginError: string | null = null;

  enquiries: Enquiry[] = [];
  loadError: string | null = null;

  activeFilter: 'All' | EnquiryStatus = 'All';
  updatingId: number | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const savedKey = sessionStorage.getItem(STORAGE_KEY);
    if (savedKey) {
      this.adminKey = savedKey;
      this.fetchEnquiries(true);
    }
  }

  onLogin(event: Event): void {
    event.preventDefault();
    this.fetchEnquiries(false);
  }

  private authHeaders(): HttpHeaders {
    return new HttpHeaders(this.adminKey ? { 'x-admin-key': this.adminKey } : {});
  }

  private fetchEnquiries(silent: boolean): void {
    this.loading = true;
    this.loginError = null;
    this.loadError = null;

    this.http
      .get<Enquiry[]>(`${environment.apiUrl}/enquiries`, { headers: this.authHeaders() })
      .subscribe({
        next: (data) => {
          this.loading = false;
          this.authenticated = true;
          this.enquiries = data;
          sessionStorage.setItem(STORAGE_KEY, this.adminKey);
        },
        error: (err: HttpErrorResponse) => {
          this.loading = false;
          sessionStorage.removeItem(STORAGE_KEY);
          if (silent) {
            this.authenticated = false;
            return;
          }
          this.authenticated = false;
          this.loginError =
            err.status === 401
              ? 'Incorrect admin key.'
              : 'Could not reach the server. Please check the backend is running.';
        },
      });
  }

  refresh(): void {
    this.fetchEnquiries(false);
  }

  logout(): void {
    this.authenticated = false;
    this.adminKey = '';
    this.enquiries = [];
    sessionStorage.removeItem(STORAGE_KEY);
  }

  setFilter(filter: 'All' | EnquiryStatus): void {
    this.activeFilter = filter;
  }

  get filteredEnquiries(): Enquiry[] {
    if (this.activeFilter === 'All') return this.enquiries;
    return this.enquiries.filter((e) => e.status === this.activeFilter);
  }

  updateStatus(enquiry: Enquiry, status: EnquiryStatus): void {
    if (enquiry.status === status) return;
    this.updatingId = enquiry.id;

    this.http
      .patch<Enquiry>(`${environment.apiUrl}/enquiries/${enquiry.id}`, { status }, { headers: this.authHeaders() })
      .subscribe({
        next: (updated) => {
          this.updatingId = null;
          const idx = this.enquiries.findIndex((e) => e.id === updated.id);
          if (idx !== -1) this.enquiries[idx] = updated;
        },
        error: () => {
          this.updatingId = null;
        },
      });
  }

  get totalCount(): number {
    return this.enquiries.length;
  }

  get todayCount(): number {
    const today = new Date().toDateString();
    return this.enquiries.filter((e) => new Date(e.submittedAt).toDateString() === today).length;
  }

  countByStatus(status: EnquiryStatus): number {
    return this.enquiries.filter((e) => e.status === status).length;
  }

  get topProducts(): ProductCount[] {
    const counts = new Map<string, number>();
    for (const e of this.enquiries) {
      const key = e.productInterest || 'Not specified';
      counts.set(key, (counts.get(key) || 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([name, count]) => ({ name, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }
}