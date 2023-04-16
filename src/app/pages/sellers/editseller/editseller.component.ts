import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Seller } from '../../../core/models/seller.models';

@Component({
  selector: 'app-editseller',
  templateUrl: './editseller.component.html',
  styleUrls: ['./editseller.component.scss']
})
export class EditsellerComponent implements OnInit {
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  productForm: FormGroup;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition
  submit: boolean = false;

  customersData: Seller;

  files: File[] = [];
  filesPreview: string[] = [];
  
  existingDocuments: string[] = [];
  deletedDocumennts: string[] = [];

  constructor(private route: ActivatedRoute, private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService) {
    this.customersData = this.route.snapshot.data.shop;
    this.existingDocuments = this.customersData.documents;

  }
  /**
   * Returns form
   */
  get form() {
    return this.productForm.controls;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Sellers' }, { label: 'Add Seller', active: true }];

    this.productForm = this.formBuilder.group({
      id: [this.customersData.id, [Validators.required]],

      name_en: [this.customersData.name_en, [Validators.required]],
      name_ar: [this.customersData.name_ar, [Validators.required]],
      email: [this.customersData.email, [Validators.required]],
      phone: [this.customersData.phone, [Validators.required]],
      address_en: [this.customersData.address_en, [Validators.required]],
      address_ar: [this.customersData.address_ar, [Validators.required]],
      description_ar: [this.customersData.description_ar, [Validators.required]],
      description_en: [this.customersData.description_en, [Validators.required]],
      city: [this.customersData.city, [Validators.required]],
      region: [this.customersData.region, [Validators.required]],
      zip: [this.customersData.zip, [Validators.required]],
    });
    this.submit = false;
  }

  
  onSelect(event) {
    this.files.push(...event.addedFiles);
    let addedFiles= event.addedFiles;
    for(let i=0;i<addedFiles.length;i++){
      this.filesPreview.push(URL.createObjectURL(addedFiles[i]));
    }
  }
  
  onRemove(event) {
    let index = this.files.indexOf(event);
    this.files.splice(index, 1);
    this.filesPreview.splice(index, 1);
  }

  deleteImage(img){
    let index = this.existingDocuments.indexOf(img);
    if (index !== -1) {
      this.existingDocuments.splice(index, 1);
      this.deletedDocumennts.push(img);
    }
  }

  validSubmit() {
    this.submit = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      let post_data = this.productForm.getRawValue();
      let id = post_data.id;
      delete post_data.id;
      const formData = new FormData();
      Object.entries(post_data).forEach(
        ([key, value]: any[]) => {
          formData.set(key, value);
        }
      )
      for(let i=0;i<this.files.length;i++){
        formData.set("documents["+i+"]", this.files[i]);
      }
      if(this.deletedDocumennts && this.deletedDocumennts.length > 0){
        formData.set("deleteDocuments",JSON.stringify(this.deletedDocumennts))
      }
      this.setserv.updateSeller(formData,id).subscribe(data => this.router.navigate(['/sellers/list']));
      this.submit = false;
    }
    // const formData = new FormData();
    // formData.append('name', this.productForm.get('name').value);
    // formData.append('manufacture_name', this.productForm.get('manufacture_name').value);
    // formData.append('manufacture_brand', this.productForm.get('manufacture_brand').value);
    // formData.append('price', this.productForm.get('price').value);
    // formData.append('image', this.file, this.image);
    //
    // this.http.post<any>(`http://localhost:8000/api/products`, formData)
    //   .subscribe((data) => {
    //     // console.log('da', data);
    //     return data;
    //   });
  }
}
