import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../core/models/product.models';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.scss']
})

/**
 * Ecommerce product-detail component
 */
export class ProductdetailComponent implements OnInit {
  backend = environment.backend;
  imageBackend = environment.imageBackend;
  breadCrumbItems: Array<{}>;
  public productDetail: Product;

  constructor(private route: ActivatedRoute) {
    this.productDetail = this.route.snapshot.data.product;
    if(this.productDetail.mainImage){
      let mainImageIndex = -1;
      for(let i=0;i<this.productDetail.images.length;i++){
        if(this.productDetail.images[i].id == this.productDetail.mainImage){
          mainImageIndex = i;
          break;
        }
      }
      if(mainImageIndex>=0){
        let itemToFind = this.productDetail.images[mainImageIndex];
        this.productDetail.images.splice(mainImageIndex, 1);
        this.productDetail.images.unshift(itemToFind);
      }
    }
    console.log(this.productDetail);

  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Products' }, { label: 'Product Detail', active: true }];

  }

  /**
   * onclick Image show
   * @param event image passed
   */
  imageShow(event) {
    const image = event.target.src;
    const expandImg = document.getElementById('expandedImg') as HTMLImageElement;
    expandImg.src = image;
  }
}
