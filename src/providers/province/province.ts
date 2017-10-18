import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
/*
  Generated class for the ProvinceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProvinceProvider {

  constructor(public http: Http) {
    console.log('Hello ProvinceProvider Provider');
  }


  async getProvinceByRegionId(regionid :string ){
   
    let headers = new Headers();
    let req = {
      headers : {
        uID : "123456789191",
        sentDateTime : "26-09-2017T05:18:34.922"
      },
      body : {
        action : "SELECT", searchkey : "region" , keyvalue : regionid 
      }
    }
    let options = new RequestOptions({ headers: headers });
    const response = await this.http.post('http://localhost:8080/xxx/rest/address/provinceService',req,options)
    .toPromise();
    return (response.json());
  }

  async getProvince(){
    let headers = new Headers();
    let req = {
      headers : {
        uID : "123456789191",
        sentDateTime : "26-09-2017T05:18:34.922"
      },
      body : {
        action : "SELECT"
      }
    }
    let options = new RequestOptions({ headers: headers });
    const response = await this.http.post('http://localhost:8080/xxx/rest/address/provinceService',req,options)
    .toPromise();
    return (response.json());
  }


  async getHospital(text :any){

    let headers = new Headers();
    let req = {
      headers : {
        uID : "123456789191",
        sentDateTime : "26-09-2017T05:18:34.922"
      },
      body : {
        action : "SELECT",
        datas : [text]
      }
    }
    let options = new RequestOptions({ headers: headers });
    const response = await this.http.post('http://localhost:8080/xxx/rest/hospital/hospitalService',req,options)
    .toPromise();
    return (response.json());
  }
  
}
