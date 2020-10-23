import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdGroupService } from '../ad-group.service';

@Component({
  selector: 'app-max-cpc-form',
  templateUrl: './max-cpc-form.component.html',
  styleUrls: ['./max-cpc-form.component.css']
})
export class MaxCpcFormComponent implements OnInit {
  @Input()
  maxCpc: number;
  @Output()
  closePopover = new EventEmitter();
  maxCpcForm = new FormGroup({
    maxCpcField: new FormControl()
  });

  constructor(
    private agService: AdGroupService
  ) { }

  ngOnInit(): void {
    this.maxCpcForm.get('maxCpcField').setValue(this.maxCpc.toFixed(2));
  }

  sendClosePopover(): void {
    console.log("child send close");
    this.closePopover.emit();
  }

}
