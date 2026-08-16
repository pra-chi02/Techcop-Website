import { Component } from '@angular/core';
import { company } from '../../data';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  templateUrl: './whatsapp-button.component.html',
})
export class WhatsappButtonComponent {
  get whatsappUrl(): string {
    const digitsOnly = company.phones[0].replace(/\D/g, ''); // strip +, spaces
    const message = encodeURIComponent(`Hi ${company.name}, I'd like to enquire about your solar products.`);
    return `https://wa.me/${digitsOnly}?text=${message}`;
  }
}
