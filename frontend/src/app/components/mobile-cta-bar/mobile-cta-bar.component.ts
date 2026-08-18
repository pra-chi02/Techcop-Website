import { Component } from '@angular/core';
import { company } from '../../data';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-mobile-cta-bar',
  standalone: true,
  templateUrl: './mobile-cta-bar.component.html',
})
export class MobileCtaBarComponent {
  readonly phone = company.phones[0];

  constructor(public translate: TranslationService) {}

  get whatsappUrl(): string {
    const digitsOnly = this.phone.replace(/\D/g, '');
    const message = encodeURIComponent(`Hi ${company.name}, I'd like to enquire about your solar products.`);
    return `https://wa.me/${digitsOnly}?text=${message}`;
  }
}
