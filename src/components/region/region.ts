import { Response } from '@angular/http';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { RegionProvider } from '../../providers/region/region';

/**
 * Generated class for the RegionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'region',
  template : `
  <div class="form-group form-style3 hasSelect">
  <select name="sector" class="form-control" [(ngModel)]="data" (change)="selectRegion()"  >
      <option value="" >เลือกภาค</option>
      <option [attr.value]="item.regionId" *ngFor="let item of dlRegion.datas">{{ item.regionName }}</option>
  </select>
</div>
  `
})
export class RegionComponent implements OnInit {
  /**
   * ค่าที่เลือก
   */
  private dlRegion = [];
  @Input() data: string;
  @Output() dataChange: EventEmitter<any> = new EventEmitter();
  @Output() dataShow: EventEmitter<string[]> = new EventEmitter();

  constructor(private regionService :RegionProvider) {}

  ngOnInit(): void {
    this.regionService.getRegion()
    .then(
      res=>{ 
        console.log(res);
        if(res.status.status == 'S'){
          this.dlRegion = res.body;
        }
        else{
          this.dlRegion = [];
        }
      }
    );
  }

  selectRegion() {
    this.dataChange.emit(this.data);
    //console.log(JSON.stringify(this.dlRegion))
    this.dataShow.emit(this.dlRegion);
  }


}
