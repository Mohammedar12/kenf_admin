import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-addseller',
  templateUrl: './addseller.component.html',
  styleUrls: ['./addseller.component.scss']
})
export class AddsellerComponent implements OnInit {
  backend = environment.backend;

  productForm: FormGroup;
  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition
  submit: boolean = false;

  files: File[] = [];
  filesPreview: string[] = [];

  constructor(private sanitizer: DomSanitizer,private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService) {

  }
  /**
   * Returns form
   */
  get form() {
    return this.productForm.controls;
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Sellers' }, { label: 'Edit Seller', active: true }];

    this.productForm = this.formBuilder.group({
      name_en: ['', [Validators.required]],
      name_ar: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      address_en: ['', [Validators.required]],
      address_ar: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: [null, [Validators.required]],
      zip: ['', [Validators.required]],
    });
    this.submit = false;
  }

  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
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

  validSubmit() {
    this.submit = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      const formData = new FormData();
      Object.entries(this.productForm.getRawValue()).forEach(
        ([key, value]: any[]) => {
          formData.set(key, value);
        }
      )
      for(let i=0;i<this.files.length;i++){
        formData.set("documents["+i+"]", this.files[i]);
      }
      this.setserv.createSeller(formData).subscribe(data => this.router.navigate(['/sellers/list']));
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
