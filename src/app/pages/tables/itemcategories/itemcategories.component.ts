import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsService } from '../../../core/services/settings.service';
import { MarketingService } from '../../../core/services/marketing.service';
import { ItemsCategory } from '../../../core/models/items_category.models';

import { SharedDataItemsCatService } from './data';
import { Observable } from 'rxjs';

import { AdvancedService } from './advanced.service';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itemcategories',
  templateUrl: './itemcategories.component.html',
  styleUrls: ['./itemcategories.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})


export class ItemcategoriesComponent implements OnInit {
  // bread crum data
  breadCrumbItems: Array<{}>;
  // Table data
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  tableData: ItemsCategory[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<ItemsCategory[]>;
  total$: Observable<number>;
  newForm: FormGroup;
  editForm: FormGroup;
  submitted = false;
  submittedEdit = false;
  files: {id: string, link: string}[] = [];
  config: DropzoneConfigInterface;
  error = '';
  image = '';
  file = '';
  
  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;
  public isCollapsed = true;

  constructor(public service: AdvancedService,
              private modalService: NgbModal,
              private formBuilder: FormBuilder,
              private setserv: SettingsService,
              private sharedDataService: SharedDataItemsCatService,
              private getserv: MarketingService
            ) {
    this.tables$ = service.tables$;

    this.total$ = service.total$;
    this.config = getserv.getUploadConfig();
  }

  ngOnInit() {
    this.sharedDataService.currentTable.subscribe(tableData => (this.tableData = tableData));
    this.setserv.getItemsCategory().subscribe(val =>   this.sharedDataService.changeTable(val));
    this.newForm = this.formBuilder.group({
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      abbreviation: ['', [Validators.required]],
      images: ['', [Validators.required]]
    });
    this.editForm = this.formBuilder.group({
      id: [{ value: '', disabled: true }, [Validators.required]],
      name_ar: ['', [Validators.required]],
      name_en: ['', [Validators.required]],
      abbreviation: ['', [Validators.required]],
      images: ['', [Validators.required]]
    });
    this.breadCrumbItems = [{ label: 'System Setting' }, { label: 'Item Categories', active: true }];
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

    let newTable = this.tableData.filter(data => data.id == id);
    this.files = newTable[0].images;

    console.log(this.files, 'images files')

    this.editForm.controls['id'].setValue(newTable[0].id);
    this.editForm.controls['name_ar'].setValue(newTable[0].name_ar);
    this.editForm.controls['name_en'].setValue(newTable[0].name_en);
    this.editForm.controls['abbreviation'].setValue(newTable[0].abbreviation);
    this.editForm.controls['images'].setValue(newTable[0].images?.map((val)=>(val?.id)));

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
      let post_data = {...this.newForm.value, isKenf: false};
      this.setserv.createItemsCategory(post_data).subscribe(data => {
        data = data.data;
        this.tableData = [{id: data.id, name_ar: data.name_ar, name_en: data.name_en, abbreviation: data.abbreviation, status: data.active, images: this.files, isKenf: false}].concat(this.tableData);
        this.sharedDataService.changeTable(this.tableData);
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
      this.setserv.updateItemsCategory({...post_data, images: post_data.images, isKenf: false},id).subscribe(data => {
        data = { ...this.editForm.getRawValue(), images: post_data.images, isKenf: false };
        let findIndex = this.tableData.findIndex(val => val.id == data.id);
        this.tableData[findIndex] = {id: data.id, name_ar: data.name_ar, name_en: data.name_en, abbreviation: data.abbreviation, status: this.tableData[findIndex].status, images: this.files, isKenf: false};
        this.sharedDataService.changeTable(this.tableData);
        this.submittedEdit = false;
        modal.close();
        this.editForm.reset();
      });
    }
  }
  deleteGroupItem(id){
    this.setserv.delItemsCategory(id).subscribe(data => {
      let newTable = this.tableData.filter(val => val.id != id);
      console.log(newTable);
      this.sharedDataService.changeTable(newTable);
    });
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
