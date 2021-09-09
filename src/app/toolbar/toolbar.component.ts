import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  title: string = 'personal homepage of andjelko';
  personalGithubUrl: string = 'https://github.com/anjeyy';
  personalLinkedinUrl: string =
    'https://www.linkedin.com/in/andjelko-p-86374b15a/';
  personalXingUrl: string = 'https://www.xing.com/profile/Andjelko_Perisic/cv';

  constructor() {}

  ngOnInit(): void {}

  goToLink(url: string): void {
    window.open(url, '_blank');
  }
}
