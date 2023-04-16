import { Component, OnInit, ViewChild } from '@angular/core';
import { MarketingService } from '../../../core/services/marketing.service';
import { CustomerService } from '../../../core/services/customer.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})

/**
 * Ecommerce orders component
 */
export class OrdersComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;
  term: any;
  order_status: Array<String>;
  transactions;
  selectedStatus;
  change_badge = [true, ];
  editForm;
  backend = environment.backend;
  error = '';
  submitted = false;
  submittedEdit = false;
  generateQrcode = "";
  barcodeImage = "";
  selectedProductTitle = "";
  selectedProductPrice = "";
  selectedProductImage = "";
  constructor(private customerService: CustomerService, private modalService: NgbModal, private formBuilder: FormBuilder, private marketingService: MarketingService) {}

  ngOnInit() {
    this.customerService.getOrders().subscribe(orders => {
      this.transactions = orders;
      console.log(orders)
    })
    this.editForm = this.formBuilder.group({
      oto_id: [''],
      // customer: ['', [Validators.required]],
      // discount: ['', [Validators.required]],
      // total: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
    this.order_status = ['WAITING', 'SHIPPED', 'PREPARED', 'HAND_OVERED', 'DELIVERED', 'REJECTED', 'CANCELED', 'ACCEPTED'];
    this.breadCrumbItems = [{ label: 'Customers' }, { label: 'Orders', active: true }];
  }
  get fe() { return this.editForm.controls; }

  selectedStatusFunc(status) {
    console.log(status)
  }

  openDetail(content, product) {
    this.generateQrcode = product.barcode;
    this.selectedProductTitle = product.name_en;
    this.selectedProductPrice = product.extra_price;
    this.selectedProductImage = product.images[0];

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.editForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      // this.editForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
    });
  }

  openEdit(content, id) {
    let newTable = this.transactions.filter(item => item._id == id);

    this.editForm.controls['oto_id'].setValue(newTable[0].tryoto_id);
    // this.editForm.controls['customer'].setValue(newTable[0].customer_id.name);
    // this.editForm.controls['discount'].setValue(newTable[0].coupon_id.code);
    // this.editForm.controls['total'].setValue(newTable[0].totalPrice);
    this.editForm.controls['status'].setValue(newTable[0].status);

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.editForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      // this.editForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
    });

    
  }

  onEdit(modal) {
    this.submittedEdit = true;

    if (this.editForm.invalid) {
      return;
    } else {
      let post_data = this.editForm.getRawValue();
      let id = post_data.id;
      delete post_data.id;
      this.customerService.updateOrder(post_data,id).subscribe(data => {
        this.transactions = this.transactions.map(item => {
          if (item.id == id) {
            item.status = post_data.status;
          }

          return item;
        });
      })
      
      modal.close();
    }
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  deleteGroupItem(id) {
    this.customerService.delOrders(id).subscribe(data => {
        this.transactions = this.transactions.filter(item => item._id != id);
    })
  }

  changeOrderStatus(id, status) {
    this.customerService.updateOrder({ status },id).subscribe(data => {
      this.transactions = this.transactions.map(item => {
        if (item.id == id) {
          item.status = status;
        }
        return item;
      });
    })
    
  }
}
