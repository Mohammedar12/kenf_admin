export class Shop {
  id: string;
  seller: string;
  app_name_ar:string;
  app_name_en:string;
  app_abbreviation:string;
  email:string;
  phone:string;
  mobile: string;
  city:string;
  region:string;
  zip:string;
  address_ar:string;
  address_en:string;
  description_ar:string;
  description_en:string;
  commission: number;
  images: {id: string, link: string}[];
}
