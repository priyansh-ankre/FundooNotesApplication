import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 240;
  viewClick = true;
  view = "list_view";
  refreshValue = false;
  refreshVeiw = "refresh";
  viewTitle = false;


  constructor() { }
  ngOnInit(): void {
  }

  onToolBarToggle() {

    this.isMenuOpen = !this.isMenuOpen;

    if (!this.isMenuOpen) {
      this.contentMargin = 95;
    }
    else {
      this.contentMargin = 280;
    }
  }

  changeView(): String {
    this.viewClick = !this.viewClick;
    if (this.viewClick) {
      return this.view = "view_list";
    } else {
      return this.view = "grid_on";
    }
  }

  refresh(): String {
    this.refreshValue = !this.refreshValue;
    if (this.refreshValue) {
      window.location.reload();
      return this.refreshVeiw = "cloud_done";
    } else {
      return this.refreshVeiw;
    }
  }
}
