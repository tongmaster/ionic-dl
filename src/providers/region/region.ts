import { Injectable } from '@angular/core';
import { Http, RequestOptions ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';


/*
  Generated class for the RegionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegionProvider {

  constructor(public http: Http) {}
  
  async getRegion(){
    
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
    const response = await this.http.post('http://localhost:8080/xxx/rest/address/regionService',req,options)
    .toPromise();
    return (response.json());
  }


 

}
