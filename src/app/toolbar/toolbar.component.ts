import { Component, OnInit } from '@angular/core';
import { myPersonalUrls, PersonalUrls } from '../personal-urls';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  title: string = 'Page of Andjelko';
  myPersonalUrls: PersonalUrls = myPersonalUrls;

  private tweetLink: string = 'https://twitter.com/intent/tweet';
  private facebookLink: string =
    'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fanjeyy.github.io%2F&amp;src=sdkpreparse';

  private seconds: number = 1000;
  private durationInSeconds: number = 1.5 * this.seconds;

  constructor(private matSnackBar: MatSnackBar) {}

  ngOnInit(): void {}

  goToLinkWithNewTab(url: string): void {
    window.open(url, '_blank');
  }

  showCopiedInfo(): void {
    this.matSnackBar.open('homepage link copied to clipboard', 'dismiss', {
      duration: this.durationInSeconds,
    });
  }

  prePopulateTwitterMessage(): string {
    const message: string = `?text=Check out Andjelko\'s homepage - Passionate software engineer with an interesting profile ${myPersonalUrls.homepage}.`;
    return this.tweetLink.concat(message);
  }

  shareLinkOnFacebook(): void {
    this.goToLinkWithNewTab(this.facebookLink);
  }
}
