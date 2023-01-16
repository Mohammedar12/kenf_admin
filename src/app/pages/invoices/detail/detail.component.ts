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
      this.invoiceDetail = invoices;
      let dateFormatter = new Intl.DateTimeFormat("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
      });
      this.invoiceDetail.qrCode = btoa(JSON.stringify({
        name: "KENF",
        date: dateFormatter.format(new Date(this.invoiceDetail.createdAt)),
        invoice: this.invoiceDetail.totalPrice,
        tax: this.invoiceDetail.tax
      }));
      console.log(this.invoiceDetail);
      this.loading = false;
    })
 }
}
