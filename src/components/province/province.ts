import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ProvinceProvider } from '../../providers/province/province';

/**
 * Generated class for the ProvinceComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'province',
  //templateUrl: 'province.html'
  template : `
  <div class="form-group form-style3 hasSelect">
  <select name="hospital1" class="form-control" [(ngModel)]="data"  (change)="selectProvince($event.target.value)" >
      <option value="" >เลือกจังหวัด</option> 
      <option [attr.value]="item.name" *ngFor="let item of dlprovince">{{ item.name }}</option>
  </select>
</div>
  `
})
export class ProvinceComponent implements OnInit , OnChanges{
  /**
   * ค่าที่เลือก
   */
  @Input() data : string;
  @Input() filter : string ;
  dlprovince  =  [];
  temprovince = [];
  @Output() dataChange: EventEmitter<String> = new EventEmitter();
  constructor(private provinceService: ProvinceProvider) {}
  ngOnInit(): void {
    this.provinceService.getProvince().then(
      res=>{ 
        console.log(res);
        if(res.status.status == 'S'){
          this.dlprovince = res.body.datas;
          this.temprovince = res.body.datas;
        }
        else{
         this.dlprovince = [];
        }
      }
    );
  }
  public ngOnChanges(changes: SimpleChanges): void {
        this.dlprovince = this.temprovince
        .filter((item,index) => item.region === this.filter);
  }

  selectProvince(value :string){
    this.dataChange.emit(value);
  }
}
