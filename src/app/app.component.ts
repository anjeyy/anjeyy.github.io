import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { IconRegistryService } from './icon-registry.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = 'anjeyy.github.io';
  constructionDisplayed: boolean = false;

  constructor(
    private iconRegistryService: IconRegistryService,
    public dialog: MatDialog
  ) {
    iconRegistryService.initilizeIcons();
  }

  ngOnInit(): void {
    this.openDialog();
  }

  openDialog() {
    if (!this.constructionDisplayed) {
      this.constructionDisplayed = true;
      this.dialog.open(UnderConstructionComponent);
    }
  }
}
