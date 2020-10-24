import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdGroupService } from '../ad-group.service';
import { DataRow } from '../data-row'
import { LogService } from '../log.service';
import { SpinnerService } from '../spinner.service';

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
  spinnerState;

  constructor(
    private agService: AdGroupService,
    private logService: LogService,
    private spinnerService: SpinnerService
  ) { }

  ngOnInit(): void {
    this.maxCpcForm.get('maxCpcField').setValue(this.data.maxCpc.toFixed(2));
    this.initSpinnerSubscription();
  }

  sendClosePopover(): void {
    this.closePopover.emit();
  }

  save(input: CpcForm): void {
    let newData = JSON.parse(JSON.stringify(this.data));
    this.logService.log('saving data');
    this.logService.log(input);
    this.logService.log(newData);
    newData.maxCpc = +input.maxCpcField;
    this.logService.log(newData);
    this.spinnerService.toggle();
    this.agService.updateRow(newData).subscribe(_ => {
      this.agService.rowChanged.next(true);
      this.spinnerService.toggle();
    }
      , _ => {
        this.logService.log('failed to update data');
        this.spinnerService.toggle();
      });
  }

  initSpinnerSubscription() {
    this.spinnerService.spinnerState.subscribe((state:boolean) => this.spinnerState = state);
    this.logService.log('subscribed to spinner')
  }

}
