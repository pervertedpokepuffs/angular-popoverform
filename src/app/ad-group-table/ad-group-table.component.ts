import { Component, OnInit } from '@angular/core';
import { DataRow } from '../data-row';
import { AdGroupService } from '../ad-group.service';
import { LogService } from '../log.service';

@Component({
  selector: 'app-ad-group-table',
  templateUrl: './ad-group-table.component.html',
  styleUrls: ['./ad-group-table.component.css']
})
export class AdGroupTableComponent implements OnInit {
  rows: DataRow[];

  constructor(
    private agService: AdGroupService,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.logService.log('init table');
    this.getRows();
    this.initGetRowsSubscription();
  }

  async getRows(): Promise<void> {
    this.rows = await this.agService.getRows();
  }

  initGetRowsSubscription() {
    this.agService.rowChanged.subscribe(async (data: boolean) => {
      if(data) {
        this.rows = await this.agService.getRows();
      }
    });
  }

  closePopover(popover) {
    popover.close();
  }

}
