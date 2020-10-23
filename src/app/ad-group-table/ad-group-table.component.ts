import { Component, OnInit } from '@angular/core';
import { AdGroupService } from '../ad-group.service';

@Component({
  selector: 'app-ad-group-table',
  templateUrl: './ad-group-table.component.html',
  styleUrls: ['./ad-group-table.component.css']
})
export class AdGroupTableComponent implements OnInit {
  rows;

  constructor(
    private agService: AdGroupService
  ) { }

  ngOnInit(): void {
    this.getRows();
    console.log(this.rows);
  }

  getRows(): void {
    this.agService.getRows().subscribe(apiRows => this.rows = apiRows);
  }

}
