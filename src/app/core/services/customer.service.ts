import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Product } from '../models/product.models';
import { map, catchError } from 'rxjs/operators';
import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private httpOptions = {};

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };
    });

  }


  getCustomers() {
    return this.http.get<any[]>(environment.backend + `/customer?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delCustomer(sysInfo) {
    return this.http.delete(environment.backend + `/customer/` + sysInfo, this.httpOptions);
  }
  updateCustomer(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/customer/`+id, sysInfo, this.httpOptions);
  }

  getOrders() {
    return this.http.get<any[]>(environment.backend + `/order?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delOrders(sysInfo) {
    return this.http.delete(environment.backend + `/order/` + sysInfo, this.httpOptions);
  }
  updateOrder(sysInfo,id) {
    return this.http.put(environment.backend + `/order/`+id, sysInfo, this.httpOptions);
  }
}
