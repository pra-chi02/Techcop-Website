import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trustFeatures } from '../../data';

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trust-bar.component.html',
})
export class TrustBarComponent {
  readonly trustFeatures = trustFeatures;
}
