// tslint:disable-next-line: class-name
import { ItemsCategory } from "./items_category.models";
import { Karats } from "./karats.models";
import { ItemsGroup } from "./items_group.models";
import { Shop } from "./shop.models";
import { Units } from "./units.models";
export class arrayModel {
  key: string;
  value: string;
}

// tslint:disable-next-line: class-name
export class Product {
  id: string;
  name_ar: string;
  name_en: string;
  category: ItemsCategory;
  kenf_collection: ItemsCategory;
  purity: Karats[];
  shop: Shop;
  weight: number;
  quantity: number;
  extra_price: number;
  group: ItemsGroup;
  unit: Units[];
  commission: number;
  description_ar: string;
  description_en: string;
  barcode: string;
  color: string;
  ringSize: string;
  images: any[];
  isExclusive: boolean;
  hidden: boolean;
  mainImage: {id: string, link: string};
  special_cat: any; 
}

export interface paginatedProducts {
  docs: Product[],
  totalDocs: number,
  limit: number,
  page: number,
  totalPages: number,
  hasNextPage: boolean,
  nextPage: string,
  hasPrevPage: boolean,
  prevPage: string,
  pagingCounter: number
}


// tslint:disable-next-line: class-name
export class filterObject {
  discountRates: number[];
  maxVal: number;
  minVal: number;
}
