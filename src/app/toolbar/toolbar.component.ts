import { Component, OnInit } from '@angular/core';
import { myPersonalUrls, PersonalUrls } from '../PersonalUrls';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {
  title: string = ' Welcome to my personal homepage';
  myPersonalUrls: PersonalUrls = myPersonalUrls;
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
}
