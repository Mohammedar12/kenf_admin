import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { MarketCategory } from '../models/market_category.models';
import { Offer } from '../models/offer.models';
import { Coupon } from '../models/coupon.models';
import { paginatedInvoices } from '../models/invoice_item.models';
import { Seller } from '../models/seller.models';
import { Shop } from '../models/shop.models';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Product, paginatedProducts } from '../models/product.models';
import { InvoiceDetail } from '../models/invoice_detail';
import { map, catchError } from 'rxjs/operators';
import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class MarketingService {
  private httpOptions = {};
  private config: DropzoneConfigInterface;
  private configFile: DropzoneConfigInterface;

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { withCredentials: true };
      this.config = {
        // Change this to your upload POST address:
        url: environment.backend + `/file/public/image`,
        maxFilesize: 10,
        acceptedFiles: 'image/*',
        method: 'POST',
        maxFiles: null,
        //headers: { "x-auth-token": user.token },
        uploadMultiple: false,
        paramName: 'files',
        parallelUploads: 10,
        createImageThumbnails: false,
        withCredentials: true
      };
    });


  }
  getUploadConfig(){
    return this.config;
  }
  createSeller(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/seller`, sysInfo, this.httpOptions);
  }
  updateSeller(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/seller/`+id, sysInfo, this.httpOptions);
  }
  getSeller(id) {
    return this.http.get<Seller>(environment.backend + `/seller/` + id, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  getSellers() {
    return this.http.get<Seller[]>(environment.backend + `/seller?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delSeller(sysInfo) {
    return this.http.delete(environment.backend + `/seller/` + sysInfo, this.httpOptions);
  }
  createProduct(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/product`, sysInfo, this.httpOptions);
  }
  updateProduct(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/product/`+id, sysInfo, this.httpOptions);
  }
  getFiltredProducts(querry) {
    return this.http.post<any[]>(environment.backend + `/product/filter`, querry, this.httpOptions);
  }
  getProducts(page,shopIds,categoryIds,groupIds,search) {
    let query = `page=${page}&limit=10`;
    if(shopIds && shopIds != null && shopIds.length !=0 ){
      //query = query + `&shops=${JSON.stringify(shopIds)}`;
      query = query + shopIds.map((val,i)=>("&shops["+i+"]="+val)).join("");
    }
    if(categoryIds && categoryIds != null && categoryIds.length !=0 ){
      //query = query + `&category=${JSON.stringify(categoryIds)}`;
      query = query + categoryIds.map((val,i)=>("&category["+i+"]="+val)).join("");
    }
    if(groupIds && groupIds != null && groupIds.length !=0 ){
      //query = query + `&groups=${JSON.stringify(groupIds)}`;
      query = query + groupIds.map((val,i)=>("&groups["+i+"]="+val)).join("");
    }
    if(search && search != null && search.trim().length !=0 ){
      query = query + `&search=${search}`;
    }
    console.log(query);
    return this.http.get<paginatedProducts>(environment.backend + `/product/admin?` + query , this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  generateBarcode(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/product/`+id, sysInfo, this.httpOptions);
  }
  getBarcode(sysInfo) {
    return this.http.get<string>(environment.backend + `/product/getBarcode?barcode=` + sysInfo, this.httpOptions);
  }
  searchBarcode(sysInfo) {
    return this.http.get<Product>(environment.backend + `/product/scanBarcode?barcode=` + sysInfo, this.httpOptions);
  }
  delProduct(sysInfo) {
    return this.http.delete(environment.backend + `/product/` + sysInfo, this.httpOptions);
  }
  getProduct(sysInfo) {
    return this.http.get<Product>(environment.backend + `/product/admin/single?id=` + sysInfo, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  hideProduct(sysInfo) {
    return this.http.post<Product>(environment.backend + `/product/hide`, sysInfo, this.httpOptions);
  }
  createShop(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/shop`, sysInfo, this.httpOptions);
  }
  updateShop(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/shop/`+id, sysInfo, this.httpOptions);
  }
  getShops() {
    return this.http.get<Shop[]>(environment.backend + `/shop?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  getShop(id) {
    return this.http.get<Shop>(environment.backend + `/shop?id=`+id, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  delShop(sysInfo) {
    return this.http.delete(environment.backend + `/shop?id=` + sysInfo, this.httpOptions);
  }
  getMarketCategory() {
    return this.http.get<MarketCategory[]>(environment.backend + `/market/category?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }))
  }
  delMarketCategory(sysInfo) {
    return this.http.delete(environment.backend + `/market/category/` + sysInfo, this.httpOptions);
  }
  createMarketCategory(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/category`, sysInfo, this.httpOptions);
  }
  updateMarketCategory(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/market/category/`+id, sysInfo, this.httpOptions);
  }

  getOffer() {
    return this.http.get<Offer[]>(environment.backend + `/market/offer?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delOffer(sysInfo) {
    return this.http.delete(environment.backend + `/market/offer/` + sysInfo, this.httpOptions);
  }
  createOffer(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/offer`, sysInfo, this.httpOptions);
  }
  updateOffer(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/market/offer/`+id, sysInfo, this.httpOptions);
  }


  getCoupon() {
    return this.http.get<Coupon[]>(environment.backend + `/market/coupon?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }

  getInvoices(page) {
    return this.http.get<paginatedInvoices>(environment.backend + `/order/invoice?page=${page}&limit=10`, this.httpOptions);
  }

  getInvoiceById(id) {
    return this.http.get<InvoiceDetail>(environment.backend + `/order/invoice/${id}`, this.httpOptions);
  }

  delCoupon(sysInfo) {
    return this.http.delete(environment.backend + `/market/coupon/` + sysInfo, this.httpOptions);
  }
  createCoupon(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/market/coupon`, sysInfo, this.httpOptions);
  }
  updateCoupon(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/market/coupon/`+id, sysInfo, this.httpOptions);
  }
  
  getCouponAdminStats(id){
    return this.http.get<any>(environment.backend + `/market/coupon/stats/${id}`, this.httpOptions);
  }
}
