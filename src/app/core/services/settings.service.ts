import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { SysInfo } from '../models/sys_info.models';
import { ItemsGroup } from '../models/items_group.models';
import { ItemsCategory } from '../models/items_category.models';
import { Shipping } from '../models/shipping.models';
import { Sizes } from '../models/sizes.models';
import { Karats } from '../models/karats.models';
import { PaymentMethods } from '../models/payment_methods.models';
import { OrderStatus } from '../models/order_status.models';
import { Units } from '../models/units.models';
import { AuthfakeauthenticationService } from './authfake.service';
import { Pagination } from '../models/pagination.models';
import { map, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  private httpOptions = {
    withCredentials: true, 
  };
  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      //this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };
    });
  }

  getSystemInfo() {
    return this.http.get<SysInfo>(environment.backend + `/settings/sys_info`, this.httpOptions);
  }

  updateSystemInfo(sysInfo) {
    return this.http.post(environment.backend + `/settings/sys_info`, sysInfo, this.httpOptions);
  }

  getItemsGroup(page=1,limit=10,search="") {
    let url = environment.backend + `/settings/items_group?page=${page}&limit=${limit}`;
    if(search && search.trim() !== ''){
      url + `&search=${encodeURIComponent(search)}`
    }
    return this.http.get<Pagination<ItemsGroup>>(url, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }

  getItemsGroupAll() {
    let url = environment.backend + `/settings/items_group?page=${1}&limit=${100}`;
    return this.http.get<Pagination<ItemsGroup>>(url, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }

  delItemsGroup(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_group/` + sysInfo, this.httpOptions);
  }
  createItemsGroup(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_group`, sysInfo, this.httpOptions);
  }
  updateItemsGroup(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/items_group/`+id, sysInfo, this.httpOptions);
  }

  getItemsCategory() {
    return this.http.get<ItemsCategory[]>(environment.backend + `/settings/items_category?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }))
  }
  delItemsCategory(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_category/` + sysInfo, this.httpOptions);
  }
  createItemsCategory(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_category`, sysInfo, this.httpOptions);
  }
  updateItemsCategory(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/items_category/`+id, sysInfo, this.httpOptions);
  }

  getShipping() {
    return this.http.get<Shipping[]>(environment.backend + `/settings/shipping?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }))
  }
  delShipping(sysInfo) {
    return this.http.delete(environment.backend + `/settings/shipping/` + sysInfo, this.httpOptions);
  }
  createShipping(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/shipping`, sysInfo, this.httpOptions);
  }
  updateShipping(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/shipping/`+id, sysInfo, this.httpOptions);
  }

  getUnits() {
    return this.http.get<Units[]>(environment.backend + `/settings/units?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delUnits(sysInfo) {
    return this.http.delete(environment.backend + `/settings/units/` + sysInfo, this.httpOptions);
  }
  createUnits(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/units`, sysInfo, this.httpOptions);
  }
  updateUnits(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/units/`+id, sysInfo, this.httpOptions);
  }


  getKarats() {
    return this.http.get<Karats[]>(environment.backend + `/settings/purity?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delKarats(sysInfo) {
    return this.http.delete(environment.backend + `/settings/purity/` + sysInfo, this.httpOptions);
  }
  createKarats(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/purity`, sysInfo, this.httpOptions);
  }
  updatKarats(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/purity/`+id, sysInfo, this.httpOptions);
  }

  getSizes() {
    return this.http.get<Sizes[]>(environment.backend + `/settings/items_size?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delSizes(sysInfo) {
    return this.http.delete(environment.backend + `/settings/items_size/` + sysInfo, this.httpOptions);
  }
  createSizes(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/items_size`, sysInfo, this.httpOptions);
  }
  updateSizes(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/items_size/`+id, sysInfo, this.httpOptions);
  }


  getPaymentMethods() {
    return this.http.get<PaymentMethods[]>(environment.backend + `/settings/pm?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delPaymentMethods(sysInfo) {
    return this.http.delete(environment.backend + `/settings/pm/` + sysInfo, this.httpOptions);
  }
  createPaymentMethods(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/pm`, sysInfo, this.httpOptions);
  }
  updatePaymentMethods(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/pm/`+id, sysInfo, this.httpOptions);
  }

  getOrdersStatus() {
    return this.http.get<OrderStatus[]>(environment.backend + `/settings/order_status?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delOrdersStatus(sysInfo) {
    return this.http.delete(environment.backend + `/settings/order_status/` + sysInfo, this.httpOptions);
  }
  createOrdersStatus(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/settings/order_status`, sysInfo, this.httpOptions);
  }
  updateOrdersStatus(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/order_status/`+id, sysInfo, this.httpOptions);
  }

}
