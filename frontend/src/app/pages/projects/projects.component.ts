import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clients, projects, ProjectEntry, stats, StatItem, commitmentItems, company } from '../../data';

interface InstallationPhoto {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly clients = clients;
  readonly projects: ProjectEntry[] = projects;
  readonly stats: StatItem[] = stats;
  readonly commitmentItems = commitmentItems;
  readonly company = company;

  readonly installationPhotos: InstallationPhoto[] = [
    { src: 'assets/products/real/install-1.jpg', alt: 'Solar high mast light installed on-site' },
    { src: 'assets/products/real/install-2.jpg', alt: 'Solar street light pole installed at project site' },
    { src: 'assets/products/real/install-3.jpg', alt: 'Solar street light pole installed at project site' },
    { src: 'assets/products/real/install-4.jpg', alt: 'Solar high mast light installed on-site' },
  ];

  mapsUrl(location: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  }
}
