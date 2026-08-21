import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { company, teamDepartments, TeamDept, stats, StatItem } from '../../data';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  readonly company = company;
  readonly teamDepartments: TeamDept[] = teamDepartments;
  readonly stats: StatItem[] = stats;
}
