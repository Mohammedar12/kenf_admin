import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Karats } from '../../../core/models/karats.models';

@Injectable()
export class SharedDataKaratService {
  constructor() { }
  public editDataDetails: Karats[] = [];
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  currentTable = this.messageSource.asObservable();
  changeTable(table: Karats[]) {
    this.messageSource.next(table);
  }
}
