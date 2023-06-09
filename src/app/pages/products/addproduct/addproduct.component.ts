import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SettingsService } from '../../../core/services/settings.service';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})

/**
 * Ecommerce add-product component
 */
export class AddproductComponent implements OnInit {

  productForm: FormGroup;
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition

  config: DropzoneConfigInterface;
  image = '';
  file = '';
  submit: boolean = false;
  files: {id: string, link: string}[] = [];
  shops: any[] = [];
  items_group: any[] = [];
  unit: any[] = [];
  ringSize: any[] = [];
  purity: any[] = [];
  items_category: any[] = [];
  kenf_category: any[] = [];
  brands: any[] = [];
  isExclusive: boolean = false;
  items_color: any[] = [];
  show_ringsize: boolean = false;
  mainImage: {id: string, link: string};

  constructor(private route: ActivatedRoute,private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService, private setservv: SettingsService) {
    this.config = setserv.getUploadConfig();
    console.log(this.config);
    // this.config.accept = (file) => {
    //   this.onAccept(file);
    // };
    let shops = this.route.snapshot.data.shops;
    shops.forEach(element => this.shops.push({id: element.id, name: element.app_name_en}));
    let purity = this.route.snapshot.data.purity;
    purity.forEach(element => this.purity.push({id: element.id, name: element.name_en}));
    let items_group = this.route.snapshot.data.items_group;
    items_group.forEach(element => this.items_group.push({id: element.id, name: element.name_en}));
    let unit = this.route.snapshot.data.unit;
    unit.forEach(element => this.unit.push({id: element.id, name: element.name_en}));
    let brands = this.route.snapshot.data.brands;
    brands.forEach(element => this.brands.push({id: element.id, name: element.name_en}));
    let items_category = this.route.snapshot.data.items_category;
    items_category.forEach(element => 
      {
        if (!element.isKenf) this.items_category.push({id: element.id, name: element.name_en});
        if (element.isKenf) this.kenf_category.push({id: element.id, name: element.name_en});
      }  
    );

    this.setservv.getSizes().subscribe(val => {this.ringSize = val});

    this.items_color = [{name: 'Yellow'}, {name: 'White'}, {name: 'Multi'}];
  }
  get form() {
    return this.productForm.controls;
  }


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'Add Product', active: true }];

    this.productForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      category: [null, [Validators.required]],
      kenf_collection: [null],
      ringSize: [null],
      purity: [null, [Validators.required]],
      shop: [null, [Validators.required]],
      weight: ['', [Validators.required]],
      extra_price: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      group: [null, [Validators.required]],
      unit: [null, [Validators.required]],
      commission: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      color: ['', [Validators.required]],
      images: ['', [Validators.required]],
      brand: [null],
      isExclusive: [false, [Validators.required]],
      mainImage: [null, []],
    });
  }

  onShowSizeOfRing(event) {
    //this.show_ringsize = event.id <= 2 ? true : false;
    this.show_ringsize = true;
  }

  onUploadInit(event) {
    console.log(event);

    this.submit=true;

  }
  onQueueComplete(event){
    this.submit = false;

  }
  onUploadError(event){
    console.log(event);


  }
  onUploadSuccess(event){
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);
    //let response = JSON.parse(event[2].srcElement.response);
    this.files.push({id: event[1].data[0].id,link: event[1].data[0].link});
    console.log(this.files);
    console.log(this.files.map((val)=>val.id));
    this.productForm.controls.images.setValue(this.files.map((val)=>val.id));
  }
  deleteImage(id) {
      this.files = this.files.filter((val)=>val.id !== id);
      this.productForm.controls.images.setValue(this.files.map((val)=>val.id));
      if(this.mainImage?.id === id){
        this.mainImage = null;
        this.productForm.controls.mainImage.setValue(null);
      }
  }
  onMainImageSelect(file){
    this.mainImage = file;
    this.productForm.controls.mainImage.setValue(file.id);
  }
  /**
   * Bootsrap validation form submit method
   */
    validSubmit() {
      this.submit = true;
      console.log(this.productForm.value, 'products');

      if (this.productForm.invalid) {
        return;
      } else {
        let post_data = this.productForm.getRawValue();
        if(!post_data.mainImage){
          delete post_data.mainImage;
        }
        console.log(post_data);
        this.setserv.createProduct(post_data).subscribe(data => this.router.navigate(['/products/list']));
      }
    }
}
