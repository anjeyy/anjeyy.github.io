import { Component, OnInit } from '@angular/core';
import {
  CompanyContainer,
  myCompanyContainer,
  placeholderContainer,
} from './company-container';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  placeholderContainer: CompanyContainer = placeholderContainer;
  myCompanyContainer: CompanyContainer[] = myCompanyContainer;

  constructor() {}

  ngOnInit(): void {}
}
