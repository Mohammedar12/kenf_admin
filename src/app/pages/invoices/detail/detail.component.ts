import { Component, OnInit } from '@angular/core';
import { Router  , ActivatedRoute } from '@angular/router';
import { InvoiceDetail } from 'src/app/core/models/invoice_detail';
import { MarketingService } from 'src/app/core/services/marketing.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})

/**
 * Invoices Detail component
 */
export class DetailComponent implements OnInit {

 // bread crumb items
 breadCrumbItems: Array<{}>;
 loading = false;
 invoiceDetail: InvoiceDetail;

 constructor(private route: ActivatedRoute,private setserv: MarketingService) { }

 ngOnInit() {
    this.breadCrumbItems = [{ label: 'Invoices' }, { label: 'Detail', active: true }];
    let id = this.route.snapshot.params['id'];
    this.loading = true;
    this.setserv.getInvoiceById(id).subscribe(invoices => {
      console.log(invoices);
      this.invoiceDetail = invoices;
      this.loading = false;
    })
 }
}
