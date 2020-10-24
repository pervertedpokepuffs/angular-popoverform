import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdGroupService } from '../ad-group.service';
import { DataRow } from '../data-row'
import { LogService } from '../log.service';

interface CpcForm {
  maxCpcField: string
}

@Component({
  selector: 'app-max-cpc-form',
  templateUrl: './max-cpc-form.component.html',
  styleUrls: ['./max-cpc-form.component.css']
})
export class MaxCpcFormComponent implements OnInit {
  @Input()
  data: DataRow;
  @Output()
  closePopover = new EventEmitter();
  maxCpcForm = new FormGroup({
    maxCpcField: new FormControl()
  });

  constructor(
    private agService: AdGroupService,
    private logService: LogService
  ) { }

  ngOnInit(): void {
    this.logService.log('this is cpc form');
    this.logService.log(this.data);
    this.maxCpcForm.get('maxCpcField').setValue(this.data.maxCpc.toFixed(2));
  }

  sendClosePopover(): void {
    this.closePopover.emit();
  }

  save(input: CpcForm): void {
    let newData = this.data;
    this.logService.log('saving data');
    this.logService.log(input);
    this.logService.log(newData);
    newData.maxCpc = +input.maxCpcField;
    this.logService.log(newData);
    this.agService.updateRow(this.data);
  }

}
