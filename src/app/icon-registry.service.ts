import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  private githubUrl: string = 'assets/icons/github.svg';
  private stackoverflowUrl: string = 'assets/icons/stackoverflow.svg';
  private linkedinUrl: string = 'assets/icons/linkedin.svg';
  private xingUrl: string = 'assets/icons/xing.svg';
  private twitterUrl: string = 'assets/icons/twitter.svg';

  private wmgruppeUrl: string = 'assets/icons/wm-gruppe.svg';
  private techemUrl: string = 'assets/icons/techem.svg';
  private sinovoUrl: string = 'assets/icons/sinovo.svg';

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry
  ) {}

  public initilizeIcons(): void {
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
      )
      .addSvgIcon(
        'wmgruppe-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.wmgruppeUrl)
      )
      .addSvgIcon(
        'techem-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.techemUrl)
      )
      .addSvgIcon(
        'sinovo-dark',
        this.domSanitizer.bypassSecurityTrustResourceUrl(this.sinovoUrl)
      );
  }
}
