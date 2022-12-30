import { Component, NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketingService } from '../../../core/services/marketing.service';
import { listData } from './data';
import { paginatedInvoices } from '../../../core/models/invoice_item.models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

/**
 * Invoices list component
 */
export class ListComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  listData: paginatedInvoices;

  loading = false;
  page = 1;
  totalItems = 0;

  constructor(private setserv: MarketingService) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'List', active: true }];
    /**
     * fetches the data
     */
    this.navigateToPage(1);
  }

  navigateToPage(nextPage){
    console.log(nextPage);
    this.loading = true;
    this.setserv.getInvoices(nextPage).subscribe(invoices => {
      this.listData = invoices;
      this.page = invoices.page;
      this.totalItems = invoices.totalDocs;
      this.loading = false;
    })
  }

}
