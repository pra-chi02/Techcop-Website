import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  aboutParagraphs,
  mission,
  missionPillars,
  vision,
  visionPoints,
  coreValues,
  whyChooseUs,
  WhyChooseUsItem,
  company,
} from '../../data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  readonly aboutParagraphs = aboutParagraphs;
  readonly mission = mission;
  readonly missionPillars = missionPillars;
  readonly vision = vision;
  readonly visionPoints = visionPoints;
  readonly coreValues = coreValues;
  readonly whyChooseUs: WhyChooseUsItem[] = whyChooseUs;
  readonly company = company;
}
