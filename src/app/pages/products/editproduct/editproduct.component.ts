import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { SettingsService } from '../../../core/services/settings.service';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { Product } from '../../../core/models/product.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})

/**
 * Ecommerce add-product component
 */
export class EditproductComponent implements OnInit {

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
  unit_init: string[] = [];
  purity: any[] = [];
  purity_init: string[] = [];
  items_category: any[] = [];
  kenf_category: any[] = [];
  isExclusive: boolean = false;
  isSpecial: boolean = false;
  ringSize: any[] = [];
  items_color: any[] = [];
  show_ringsize: boolean = false;
  customersData: Product;
  mainImage: {id: string, link: string};
  special_locations: any[] = [];
  special_label: string;

  constructor(private route: ActivatedRoute,private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService, private setservv: SettingsService) {
    this.config = setserv.getUploadConfig();
    console.log(this.config);
    this.customersData = this.route.snapshot.data.product;
    this.mainImage = this.customersData.mainImage;
    this.show_ringsize = this.customersData.category?.id ? true : false;
    console.log('!!!!!!', this.customersData)
    let shops = this.route.snapshot.data.shops;
    shops.forEach(element => this.shops.push({id: element.id, name: element.app_name_en}));
    let purity = this.route.snapshot.data.purity;
    purity.forEach(element => this.purity.push({id: element.id, name: element.name_en}));
    let items_group = this.route.snapshot.data.items_group;
    items_group.forEach(element => this.items_group.push({id: element.id, name: element.name_en}));
    let unit = this.route.snapshot.data.unit;
    unit.forEach(element => this.unit.push({id: element.id, name: element.name_en}));
    let items_category = this.route.snapshot.data.items_category;
    items_category.forEach(element => {
      if (!element.isKenf) this.items_category.push({id: element.id, name: element.name_en});
      if (element.isKenf) this.kenf_category.push({id: element.id, name: element.name_en});
    });
    this.setservv.getSizes().subscribe(val => {this.ringSize = val});
    this.items_color = [{name: 'Yellow'}, {name: 'White'}, {name: 'Multi'}];
    this.special_locations = [{name: 'Category'}, {name: 'Collection'}];
  }
  get form() {
    return this.productForm.controls;
  }
  
  
  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'Edit Product', active: true }];
    this.customersData.images.forEach(element => {
      this.files.push({id: element.id, link: element.link});
    });
    this.customersData.purity?.forEach(element => {
        this.purity_init.push(element.id);
    });
    this.customersData.unit?.forEach(element => {
        this.unit_init.push(element.id);
    });
      
    this.isExclusive = this.customersData.isExclusive;
    this.isSpecial = this.customersData.special_cat ? true : false;

    let special_loc;
    let special_cat_id;
    if(this.customersData.special_cat?.category){
      special_cat_id = this.customersData.special_cat.category.id;
      if(this.customersData.special_cat.category.isKenf){
        special_loc = "Collection";
        this.special_label = this.customersData.special_cat.category.name_en;
      }
      else{
        special_loc = "Category";
        this.special_label = this.customersData.special_cat.category.name_en;
      }
    }

    this.productForm = this.formBuilder.group({
      id: [this.customersData.id, [Validators.required]],
      name_ar: [this.customersData.name_ar, [Validators.required]],
      name_en: [this.customersData.name_en, [Validators.required]],
      category: [this.customersData.category?.id, [Validators.required]],
      kenf_collection: [this.customersData.kenf_collection],
      ringSize: [this.customersData.ringSize],
      purity: [this.purity_init, [Validators.required]],
      shop: [this.customersData.shop?.id, [Validators.required]],
      weight: [this.customersData.weight, [Validators.required]],
      extra_price: [this.customersData.extra_price, [Validators.required]],
      quantity: [this.customersData.quantity, [Validators.required]],
      group: [this.customersData.group?.id, [Validators.required]],
      unit: [this.unit_init, [Validators.required]],
      commission: [this.customersData.commission, [Validators.required]],
      description_ar: [this.customersData.description_ar, [Validators.required]],
      description_en: [this.customersData.description_en, [Validators.required]],
      color: [this.customersData.color, [Validators.required]],
      images: [this.customersData.images?.map((val)=>(val.id)), [Validators.required]],
      isExclusive: [this.customersData.isExclusive, [Validators.required]],
      isSpecial: [this.customersData.special_cat?.category ? true : false,[]],
      special_loc: [special_loc, []],
      special_cat_id: [special_cat_id,[]],
      mainImage: [this.customersData.mainImage?.id, []],
    });
  }
  onShowSizeOfRing(event) {
    this.show_ringsize = true;
    if(this.productForm.get("special_loc").value === 'Category'){
      this.special_label = event.name;
      this.productForm.controls.special_cat_id.setValue(event.id);
    }
  }
  onChangeCollection(event) {
    if(this.productForm.get("special_loc").value === 'Collection'){
      this.special_label = event.name;
      this.productForm.controls.special_cat_id.setValue(event.id);
    }
  }
  changeSepcial(event){
    if(event.target.checked){
      this.isSpecial = true;
    }
    else{
      this.isSpecial = false;
    }
  }
  changeSepcialLoc(event){
    if(event?.name === 'Category'){
      this.items_category.forEach((val)=>{
        if(val.id === this.productForm.get('category').value){
          this.special_label = val.name;
          this.productForm.controls.special_cat_id.setValue(val.id);
        }
      });
    } else if(event?.name === 'Collection'){
      this.kenf_category.forEach((val)=>{
        if(val.id === this.productForm.get('kenf_collection').value){
          this.special_label = val.name;
          this.productForm.controls.special_cat_id.setValue(val.id);
        }
      });
    } else {
      this.special_label = "";
      this.productForm.controls.special_cat_id.setValue(null);
    }
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
  onMainImageSelect(file){
    this.mainImage = file;
    this.productForm.controls.mainImage.setValue(file.id);
  }
  onUploadSuccess(event){
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);
    //let response = JSON.parse(event[2].srcElement.response);
    this.files.push({id: event[1].data[0].id,link: event[1].data[0].link});
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
  /**
   * Bootsrap validation form submit method
   */
   validSubmit() {
      this.submit = true;
      if (this.productForm.invalid) {
        return;
      } else {
        let post_data = this.productForm.getRawValue();
        let id = post_data.id;
        delete post_data.id;
        delete post_data.special_loc;
        if(post_data.isSpecial === false){
          delete post_data.special_cat_id;
        }
        if(!post_data.mainImage){
          delete post_data.mainImage;
        }
        console.log('productedit', post_data);
       this.setserv.updateProduct(post_data,id).subscribe(data => this.router.navigate(['/products/list']));
      }

   }
}
