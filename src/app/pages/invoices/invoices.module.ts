import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbTooltipModule, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { InvoicesRoutingModule } from './invoices-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    InvoicesRoutingModule,
    UIModule,
    NgbTooltipModule,
    NgxPaginationModule,
    QRCodeModule
  ]
})
export class InvoicesModule { }
