import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MarketingService } from '../../../core/services/marketing.service';
import { SettingsService } from '../../../core/services/settings.service';
import { Coupon } from '../../../core/models/coupon.models';
import { Shipping } from '../../../core/models/shipping.models';
import { SharedDataCouponService } from './data';
import { ItemsCategory } from '../../../core/models/items_category.models';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { idText } from 'typescript';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class CouponsComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: any[];
  public selected: any;
  loadingStats: boolean;
  salesStats: any;
  hideme: boolean[] = [];
  tables$: Observable<Coupon[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  discountType = 'percent';
  profitType = 'percent';
  amountType = [{ id: 'percent', name: 'Percentage' }, { id: 'fixed', name: 'fixed Amount' }]
  exceptDiscountedProduct = [true, false];
  items_category: ItemsCategory[];
  shipping_companies: Shipping[];
  error = '';
  disableType = false;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;



  constructor(
    public service: AdvancedService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private setserv: MarketingService,
    private setservv: SettingsService,
    private sharedDataService: SharedDataCouponService,
  ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Market Setting' }, { label: 'Coupons', active: true }];
    this.breadCrumbItems = [{ label: 'Market Setting' }, { label: 'Ofers', active: true }];

    this.sharedDataService.currentTable.subscribe(tableData => {
      this.tableData = tableData;
    });
    this.setservv.getItemsCategory().subscribe(category => {
      this.items_category = category;
    })
    this.setservv.getShipping().subscribe(shipping => {
      this.shipping_companies = shipping;
    })
    this.setserv.getCoupon().subscribe(val => this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      user: ['', [Validators.required]],
      email: ['', [Validators.required]],
      code: ['', [Validators.required]],
      discount_type: ['percent', [Validators.required]],
      discount: ['', [Validators.required]],
      max_discount: [''],
      freeShipping: [],
      profit: ['', [Validators.required]],
      profit_type: ['percent', [Validators.required]],
      total_purchase_condition: ['', [Validators.required]],
      included_category: ['', [Validators.required]],
      except_discounted_product: [null, [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      user: ['', [Validators.required]],
      email: [''],
      code: ['', [Validators.required]],
      discount_type: ['percent', [Validators.required]],
      discount: ['', [Validators.required]],
      max_discount: [''],
      freeShipping: [],
      profit: ['', [Validators.required]],
      profit_type: ['percent', [Validators.required]],
      total_purchase_condition: ['', [Validators.required]],
      included_category: ['', [Validators.required]],
      except_discounted_product: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
    });
    /**
     * fetch data
     */
    // this._fetchData();
  }

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
  }

  onDisable(event) {
    this.disableType = event.id == "percent" ? false : true;
  }

  get f() { return this.newForm.controls; }
  get fe() { return this.editForm.controls; }

    open(content) {
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.newForm.reset();
        console.log(`Closed with: ${result}`);
      }, (reason) => {
        this.newForm.reset();
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });
    }
    openEdit(content, id) {
      let newTable = this.tableData.filter(data => data.id == id);
      console.log(newTable[0]);
      this.editForm.controls['id'].setValue(newTable[0].id);
      this.editForm.controls['user'].setValue(newTable[0].user);
      this.editForm.controls['email'].setValue(newTable[0].email);
      this.editForm.controls['code'].setValue(newTable[0].code);
      this.editForm.controls['discount'].setValue(newTable[0].discount);
      this.editForm.controls['discount_type'].setValue(newTable[0].discount_type);
      this.editForm.controls['freeShipping'].setValue(newTable[0].freeShipping);
      this.editForm.controls['profit'].setValue(newTable[0].profit);
      this.editForm.controls['profit_type'].setValue(newTable[0].profit_type);
      this.editForm.controls['max_discount'].setValue(newTable[0].max_discount);
      this.editForm.controls['total_purchase_condition'].setValue(newTable[0].total_purchase_condition);
      this.editForm.controls['included_category'].setValue(newTable[0].included_category);
      this.editForm.controls['except_discounted_product'].setValue(newTable[0].except_discounted_product);
      this.editForm.controls['start_date'].setValue(newTable[0].start_date?.substring(0, 10));
      this.editForm.controls['end_date'].setValue(newTable[0].end_date?.substring(0, 10));

      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.editForm.reset();
        console.log(`Closed with: ${result}`);
      }, (reason) => {
        this.editForm.reset();
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });
    }
    openView(content, id) {
      this.loadingStats = true;
      this.setserv.getCouponAdminStats(id).subscribe(data => {
        this.loadingStats = false;
        this.salesStats = data;
      });
      this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        console.log(`Closed with: ${result}`);
      }, (reason) => {
        this.editForm.reset();
        console.log(`Dismissed ${this.getDismissReason(reason)}`);
      });
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

    /**
     * fetches the table value
     */
    // _fetchData() {
    //   this.tableData = tableData;
    //   for (let i = 0; i <= this.tableData.length; i++) {
    //     this.hideme.push(true);
    //   }
    // }

    /**
     * Sort table data
     * @param param0 sort the column
     *
     */
    onSort({ column, direction }: SortEvent) {
      // resetting other headers
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });
      this.service.sortColumn = column;
      this.service.sortDirection = direction;
    }
    onSubmit(modal) {
      this.submitted = true;

      console.log(this.newForm.invalid)
      console.log(this.newForm.value)
      console.log(this.items_category.filter(item => item.id === this.newForm.value.included_category))

      // stop here if form is invalid
      if (this.newForm.invalid) {
        return;
      } else {
        let post_data = {...this.newForm.value};
        if(post_data.discount_type === 'fixed'){
          delete post_data.max_discount;
        }
        this.setserv.createCoupon(post_data).subscribe(data => {
          data = data.data;
          this.tableData = [{ id: data.id,
            user: data.user,
            email: data.email,
            code: data.code,
            discount_type: data.discount_type,
            discount: data.discount,
            max_discount: data.max_discount,
            freeShipping: data.freeShipping,
            profit: data.profit,
            profit_type: data.profit_type,
            total_purchase_condition: data.total_purchase_condition,
            included_category: this.items_category.filter(item => item.id === this.newForm.value.included_category)[0],
            except_discounted_product: data.except_discounted_product,
            start_date: data.start_date,
            end_date: data.end_date,
          }].concat(this.tableData);
          this.sharedDataService.changeTable(this.tableData);
          this.submitted = false;
          modal.close();
          this.newForm.reset();
        });
      }
    }
    onEdit(modal) {
      this.submittedEdit = true;

      // stop here if form is invalid
      if (this.editForm.invalid) {
        return;
      } else {
        let post_data = this.editForm.getRawValue();
        let id = post_data.id;
        delete post_data.id;
        if(post_data.discount_type === 'fixed'){
          delete post_data.max_discount;
        }
        this.setserv.updateCoupon(post_data,id).subscribe(data => {
          data = this.editForm.getRawValue();
          let findIndex = this.tableData.findIndex(val => val.id == data.id);
          this.tableData[findIndex] = {
                                        id: data.id,
                                        user: data.user,
                                        email: data.email,
                                        code: data.code,
                                        discount_type: data.discount_type,
                                        discount: data.discount,
                                        max_discount: data.max_discount,
                                        freeShipping: data.freeShipping,
                                        profit: data.profit,
                                        profit_type: data.profit_type,
                                        total_purchase_condition: data.total_purchase_condition,
                                        included_category: this.items_category.filter(item => item.id === this.newForm.value.included_category)[0],
                                        except_discounted_product: data.except_discounted_product,
                                        start_date: data.start_date,
                                        end_date: data.end_date,
                                      };
          this.sharedDataService.changeTable(this.tableData);
          this.submittedEdit = false;
          modal.close();
          this.editForm.reset();
        });
      }
    }
    deleteGroupItem(id) {
      this.setserv.delCoupon(id).subscribe(data => {
        let newTable = this.tableData.filter(data => data.id != id);
        console.log(newTable);
        this.sharedDataService.changeTable(newTable);
        // modal.close();
        // this.newForm.reset();
      });
    }

}
