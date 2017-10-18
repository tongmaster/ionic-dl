import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProvinceProvider } from '../../providers/province/province';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private  hospitalData:any ;
  private region :string ;
  private province : string;
  private data : string;
  private showdata:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, private provinceService :ProvinceProvider) {

  }

  /**
   * ค้นหา
   */
  
  public search(text) {
    console.log(text + "  "+this.region+"  "+this.province );
    let data ={province : this.province , region : this.region , address : text };
    this.provinceService.getHospital(data)
    .then(res=>{
      //console.log(res);
      /*
      res.body.datas.forEach(element => {
        console.log(element);
        let obj2 = {service : {ipd : true,opd :true}};
        console.log(element);
        Object.assign(element,obj2);
      });
      */
      console.log(res.body.datas);
      this.hospitalData = res.body.datas;
    });

  }

  show(showdata :string) {
    this.showdata = showdata;
  }

}
