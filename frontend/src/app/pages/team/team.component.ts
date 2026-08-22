
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
  company,
  teamDepartments,
  TeamDept,
  stats,
  StatItem,
  teamMembers,
  TeamMember,
} from '../../data';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './team.component.html',
})
export class TeamComponent {
  readonly company = company;

  readonly teamDepartments: TeamDept[] = teamDepartments;

  readonly stats: StatItem[] = stats;

  readonly teamMembers: TeamMember[] = teamMembers;

  // readonly ratings = [1, 2, 3, 4, 5];

  // feedback = {
  //   name: '',
  //   email: '',
  //   type: '',
  //   rating: 0,
  //   message: '',
  // };

  // feedbackSubmitted = false;

  // submitFeedback(form: NgForm): void {
  //   if (form.invalid || !this.feedback.rating) {
  //     return;
  //   }

  //   console.log('Feedback submitted:', this.feedback);

  //   this.feedbackSubmitted = true;

  //   this.feedback = {
  //     name: '',
  //     email: '',
  //     type: '',
  //     rating: 0,
  //     message: '',
  //   };

  //   form.resetForm();

  //   setTimeout(() => {
  //     this.feedbackSubmitted = false;
  //   }, 5000);
  // }
}