import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { MarketingService } from '../../../core/services/marketing.service';
import { Brands } from '../../../core/models/brands.models';

import { Observable } from 'rxjs';


import { SharedDataBrandsService } from './data';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Brands',
  templateUrl: './Brands.component.html',
  styleUrls: ['./Brands.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class BrandsComponent implements OnInit {
  // bread crum data
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  breadCrumbItems: Array<{}>;
  // Table data
  tableData: any;
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Brands[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  error = '';
  files: {id: string, link: string}[] = [];
  config: DropzoneConfigInterface;

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private setserv: SettingsService,
              private SharedDataBrandsService: SharedDataBrandsService,
              private getserv: MarketingService
              ) {
    this.tables$ = service.tables$;
    this.total$ = service.total$;
    this.config = getserv.getUploadConfig();
  }

  ngOnInit() {
    this.SharedDataBrandsService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getBrands().subscribe(val =>   this.SharedDataBrandsService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      images: ['', [Validators.required]],
    });
    this.breadCrumbItems = [{ label: 'System Setting' }, { label: 'Brands', active: true }];
    /**
     * fetch data
     */
    // this._fetchData();
  }
  get f() { return this.newForm.controls; }
  get fe() { return this.editForm.controls; }

  changeValue(i) {
    this.hideme[i] = !this.hideme[i];
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
  open(content) {
    this.files = [];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.newForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      this.newForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
    });
  }
  openEdit(content, id) {
    this.files = [];
    let newTable = this.tableData.docs.filter(data => data.id == id);
    // this.files = newTable[0].images;
    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['name_ar'].setValue(newTable[0].name_ar);
    this.editForm.controls['name_en'].setValue(newTable[0].name_en);
    this.editForm.controls['images'].setValue(newTable[0].images.map((val)=>(val?.id)));

    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.editForm.reset();
      console.log(    `Closed with: ${result}` );
    }, (reason) => {
      this.editForm.reset();
      console.log(      `Dismissed ${this.getDismissReason(reason)}` );
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
    
    // stop here if form is invalid
    if (this.newForm.invalid) {
      return;
    } else {
      this.setserv.createBrands(this.newForm.value).subscribe(data => {
        data = data.data;
        this.tableData.docs = [{id: data.id, name_ar: data.name_ar, name_en: data.name_en, status: data.active, images: this.files}].concat(this.tableData.docs);
        this.tableData.totalDocs +=  1;
        this.SharedDataBrandsService.changeTable(this.tableData);
        this.service.page = 1;
        this.submitted = false;
        modal.close();
        this.newForm.reset();
      });
    }
  }
  onEdit(modal) {
    this.files = [];
    this.submittedEdit = true;

    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    } else {
      let post_data = this.editForm.getRawValue();
      let id = post_data.id;
      delete post_data.id;
      this.setserv.updateBrands(post_data,id).subscribe(data => {
        data = this.editForm.getRawValue();
        let findIndex = this.tableData.docs.findIndex(val => val.id == data.id);
        this.tableData.docs[findIndex] = {id: data.id, name_ar: data.name_ar, name_en: data.name_en, status: this.tableData.docs[findIndex]?.status, images: this.files};
        this.SharedDataBrandsService.changeTable(this.tableData);
        this.service.page = this.service.page;
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteBrands(id){
    this.setserv.delBrands(id).subscribe(data => {
      let newTable = this.tableData.docs.filter(data => data.id != id);
      console.log(newTable);
      this.SharedDataBrandsService.changeTable(newTable);
      this.service.page = this.service.page;
      // modal.close();
      // this.newForm.reset();
    });
  }
  toggleActive(id){
    console.log(id);

  }
  onUploadInit(event) {
    console.log(event);

    this.submitted=true;

  }
  onQueueComplete(event){
    this.submitted = false;

  }
  onUploadError(event){
    console.log(event);
  }
  onUploadSuccess(event){
    event[0].previewElement.parentNode.removeChild(event[0].previewElement);
    //let response = JSON.parse(event[2].srcElement.response);
    this.files.push({id: event[1].data[0].id,link: event[1].data[0].link});

    this.newForm.controls.images.setValue(this.files.map((val)=>val.id));
    this.editForm.controls.images.setValue(this.files.map((val)=>val.id));
  }
  deleteImage(id) {
      this.files = this.files.filter((val)=>val.id !== id);
      this.newForm.controls.images.setValue(this.files.map((val)=>val.id));
      this.editForm.controls.images.setValue(this.files.map((val)=>val.id));
  }

}
