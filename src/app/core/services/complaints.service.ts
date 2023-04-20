import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

import { AuthfakeauthenticationService } from './authfake.service';

@Injectable({ providedIn: 'root' })
export class ComplaintsService {
  private httpOptions = {};

  constructor(private http: HttpClient, private authService: AuthfakeauthenticationService) {
    this.authService.currentUser.subscribe(user => {
      this.httpOptions = { withCredentials: true };
    });

  }


  getComplaints() {
    return this.http.get(environment.backend + `/settings/complaints?page=${1}&limit=${100}`, this.httpOptions).pipe( map( (response: any) => { 
      return response.data.docs; 
    }));
  }
  delComplaints(sysInfo) {
    return this.http.delete(environment.backend + `/settings/complaints/` + sysInfo, this.httpOptions);
  }

  sendAnswer(sysInfo,id): Observable<any> {
    return this.http.put(environment.backend + `/settings/complaints/answer/`+id, sysInfo, this.httpOptions);
  }
}
