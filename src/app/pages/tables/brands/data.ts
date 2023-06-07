import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Brands } from '../../../core/models/brands.models';

@Injectable()
export class SharedDataBrandsService {
  constructor() { }
  public editDataDetails: Brands[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Brands[]) {
    this.messageSource.next(table);
  }
}
