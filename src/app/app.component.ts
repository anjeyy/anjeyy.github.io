import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'anjeyy.github.io';
  private githubUrl: string = 'assets/icons/github.svg';
  private linkedinUrl: string = 'assets/icons/linkedin.svg';
  private xingUrl: string = 'assets/icons/xing.svg';
  private twitterUrl: string = 'assets/icons/twitter.svg';
  private stackoverflowUrl: string = 'assets/icons/stackoverflow.svg';

  // doit - refactor for icon module registerer
  // doit - tech stack icons
  // doit - route to appropriate tabs (lazy loading - if necessary)

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {
    this.matIconRegistry
      .addSvgIcon(
        'github-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.githubUrl)
      )
      .addSvgIcon(
        'stackoverflow-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.stackoverflowUrl)
      )
      .addSvgIcon(
        'linkedin-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.linkedinUrl)
      )
      .addSvgIcon(
        'xing-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.xingUrl)
      )
      .addSvgIcon(
        'twitter-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.twitterUrl)
      );
  }
}
