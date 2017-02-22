import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WishMessageService {

  constructor( private http: Http ) { }

   getWishMessage() {
        return this.http.get("assets/wishmessage.json").map(res => res.json());
    }

}
