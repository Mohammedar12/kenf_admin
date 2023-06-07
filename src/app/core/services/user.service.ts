import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { User } from '../models/auth.models';
import { Pagination } from '../models/pagination.models';
import { UserGroup } from '../models/user_group.models';
import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private httpOptions = {
    withCredentials: true, 
    headers: new HttpHeaders(),
  };
  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      //this.httpOptions = { headers: new HttpHeaders({ "x-auth-token": user.token }) };

      console.log(user)
    });
  }

  getUserGroup(page=1,limit=10,search="") {
    let url = environment.backend + `/user/group?page=${page}&limit=${limit}`;
    if(search && search.trim() !== ''){
      url + `&search=${encodeURIComponent(search)}`
    }
    return this.http.get<Pagination<UserGroup>>(url, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  delUserGroup(sysInfo) {
    return this.http.delete(environment.backend + `/user/group/` + sysInfo, this.httpOptions);
  }
  updateUserGroup(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/user/group/`+id, sysInfo, this.httpOptions);
  }
  adduser(adduser): Observable<any> {
    return this.http.post(environment.backend + `/user`, adduser, this.httpOptions);
  }
  AddUserGroup(sysInfo): Observable<any> {
    return this.http.post(environment.backend + `/user/group`, sysInfo, this.httpOptions);
  }
  getAll(page=1) {
    return this.http.get<Pagination<UserGroup>>(environment.backend + `/user?page=`+page, this.httpOptions).pipe( map( (response: any) => { 
      return response.data; 
    }));
  }
  getFile(id): Observable<any> {
    return this.http.get(environment.backend + `/getfile?id=`+id);
  }
  register(user: User) {
    return this.http.post(`/users/register`, user);
  }
}
