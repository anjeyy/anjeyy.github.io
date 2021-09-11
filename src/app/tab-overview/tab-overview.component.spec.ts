import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOverviewComponent } from './tab-overview.component';

describe('TabOverviewComponent', () => {
  let component: TabOverviewComponent;
  let fixture: ComponentFixture<TabOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
