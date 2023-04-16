import { Component, OnInit } from '@angular/core';
import { paginatedProducts } from '../../../core/models/product.models';
import { Options } from 'ng5-slider';
import { HttpClient } from '@angular/common/http';
import { MarketingService } from '../../../core/services/marketing.service';
import { environment } from '../../../../environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

export class ProductQuerry {
  groups: number[] = [];
  shops: number[] = [];
  categories: number[] = [];
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

/**
 * Ecommerce products component
 */

export class ProductsComponent implements OnInit {
  shops: any[] = [];
  querry: ProductQuerry;
  filterChanged: boolean = false;
  breadCrumbItems: Array<{}>;
  pricevalue = 100;
  minVal = 100;
  maxVal = 500;
  form: FormGroup;
  barcodeImage = "";
  generateQrcode = "";
  selectedId: number;
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  priceoption: Options = {
    floor: 0,
    ceil: 800,
    translate: (value: number): string => {
      return 'SAR ' + value;
    },
  };
  log = '';
  error = '';

  discountRates: number[] = [];
  public products: paginatedProducts;
  loading = false;
  page = 1;
  totalItems = 0;

  items_category: any[] = [];// public productTemp: productModel[] = [];
  items_group: any[] = [];

  appliedShops: any[] = [];
  appliedItems_category: any[] = [];
  appliedItems_group: any[] = [];
  appliedSearch: string;

  constructor(private modalService: NgbModal,
    private _fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private marketingService: MarketingService) {
    this.items_category = this.route.snapshot.data.items_category;
    this.items_group = this.route.snapshot.data.items_group;
    let shops = this.route.snapshot.data.shops;
    shops.forEach(element => this.shops.push({ id: element.id, name: element.app_name_en }));
    this.querry = new ProductQuerry();
    this.form = this._fb.group({
      categories: this.querry.categories,
      groups: this.querry.groups,
      shops: this.querry.shops,
    });
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'All Products', active: true }];

    this.navigateToPage(1);
  }

  openModal(content, id) {
    this.selectedId = id;
    let product = this.products.docs.filter(data => data.id == id)[0];
    let index = this.products.docs.indexOf(product);

    let shopAbbreviation = product.shop?.app_abbreviation;
    let groupAbbreviation = product.group?.abbreviation;
    let categoryAbbreviation = product.category?.abbreviation;
    let purity = product.purity[0].name_en;
    let zero = '000000';

    console.log(product)

    this.generateQrcode = shopAbbreviation + '-' + groupAbbreviation + categoryAbbreviation + purity + zero.substring(product.id.toString().length) + product.id;

    this.marketingService.generateBarcode({barcode: this.generateQrcode},id).subscribe((responseData) => {
      //this.products[index].barcode = this.barcodeImage;
      this.barcodeImage = this.generateQrcode;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
          console.log(`Closed with: ${result}`);
        }, (reason) => {
          console.log(`Dismissed ${this.getDismissReason(reason)}`);
        });
    });
  }

  onChange(event) {
    this.querry.shops = []; 
    event.forEach(element => {
      this.querry.shops.push(element.id)
    });
    this.form.controls.shops.setValue(this.querry.shops);
  }

  toggleGroup({ target }, id) {
    let index = this.querry.groups.indexOf(id);
    if (index > -1) {
      target.style.fontWeight = 400;
      this.querry.groups.splice(index, 1);
    } else {
      target.style.fontWeight = 900;
      this.querry.groups.push(id);
    }
    this.form.controls.groups.setValue(this.querry.groups);
  }

  toggleCategory({ target }, id) {
    let index = this.querry.categories.indexOf(id);
    if (index > -1) {
      target.style.fontWeight = 400;
      this.querry.categories.splice(index, 1);
    } else {
      target.style.fontWeight = 900;
      this.querry.categories.push(id);
    }

    this.form.controls.categories.setValue(this.querry.categories);
  }

  apply() {
    this.appliedShops = this.form.value.shops;
    this.appliedItems_category = this.form.value.categories;
    this.appliedItems_group = this.form.value.groups;

    this.navigateToPage(1);
  }

  searchFilter(e) {
    this.appliedSearch = e.target.value.trim();
    this.navigateToPage(1);
  }

  editItem(id) {
    this.router.navigate(['/products/edit/' + id]);
  }

  hideItem(id, hidden) {
    this.marketingService.hideProduct({id: id, hide: hidden}).subscribe(data => {
      console.log('the product is hidden' + id);
      this.products.docs.filter(item => item.id === id)[0].hidden = !hidden;
    });
  }

  deleteGroupItem(id) {
    this.marketingService.delProduct(id).subscribe(data => {
    this.navigateToPage(this.page);
      // this.sharedDataService.changeTable(newTable);
      // modal.close();
      // this.newForm.reset();
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

  navigateToPage(nextPage){
    this.loading = true;
    this.marketingService.getProducts(nextPage,this.appliedShops,this.appliedItems_category,this.appliedItems_group,this.appliedSearch).subscribe((products: paginatedProducts) => {
      for(let i=0;i<products.docs.length;i++){
        if(products.docs[i].mainImage && products.docs[i].mainImage?.id){
          let mainImageIndex = -1;
          for(let j=0;j<products.docs[i].images.length;j++){
            if(products.docs[i].images[j].id === products.docs[i].mainImage){
              mainImageIndex = j;
              break;
            }
          }
          if(mainImageIndex >= 0){
            products.docs[i].images.unshift(products.docs[i].images.splice(mainImageIndex, 1)[0]);
          }
        }
      }
      this.products = products;
      this.page = products.page;
      this.totalItems = products.totalDocs;
      this.loading = false;
    })
  }
}
