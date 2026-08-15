import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clients, projects, ProjectEntry, stats, StatItem, commitmentItems, company } from '../../data';

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

  mapsUrl(location: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;
  }
}
