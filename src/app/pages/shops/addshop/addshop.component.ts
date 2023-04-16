import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MarketingService } from '../../../core/services/marketing.service';
import { ActivatedRoute, Router } from '@angular/router'
import { environment } from '../../../../environments/environment';
import { UserProfileService } from '../../../core/services/user.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.scss']
})
export class AddshopComponent implements OnInit {
  productForm: FormGroup;

  // bread crumb items
  breadCrumbItems: Array<{}>;
  // Form submition
  selectedOwner: number;
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  config: DropzoneConfigInterface;
  image = '';
  file = '';
  submit: boolean = false;
  submitted: boolean = false;
  files: {id: string, link: string}[] = [];
  owners: any[] = [];
  constructor(private route: ActivatedRoute,private router: Router, public formBuilder: FormBuilder, private http: HttpClient, private setserv: MarketingService, private userService: UserProfileService) {
    this.config = setserv.getUploadConfig();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Shops' }, { label: 'Add Shop', active: true }];
    this.userService.getAll(1).subscribe( val =>   {
      // let owners = this.route.snapshot.data.owners;
      let owners = [];
      val.docs.forEach(element => owners.push({...element}));
      this.owners = owners;
      // this.customersData = val,
      console.log('Owner - ', this.owners);
    });

    this.productForm = this.formBuilder.group({
      seller: [null, [Validators.required]],
      app_name_ar: ['', [Validators.required]],
      app_name_en: ['', [Validators.required]],
      app_abbreviation: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      address_en: ['', [Validators.required]],
      address_ar: ['', [Validators.required]],
      description_ar: ['', [Validators.required]],
      description_en: ['', [Validators.required]],
      city: ['', [Validators.required]],
      region: [null, [Validators.required]],
      zip: ['', [Validators.required]],
      commission: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
    this.submit = false;


  }
  /**
   * Returns form
   */
  get f() {
    return this.productForm.controls;
  }
  
  onUploadError(event){
    console.log(event);
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
  }

  onAccept(file: any) {
    this.image = file.name;
    this.file = file;
  }

  validSubmit() {
    this.submit = true;
    this.submitted = true;

    console.log(this.productForm.value, 'kenf shop')
    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      this.setserv.createShop(this.productForm.value).subscribe(data => this.router.navigate(['/shops/list']));


    }
  }
}
