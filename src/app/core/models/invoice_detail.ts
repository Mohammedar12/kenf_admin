interface Product {

}
export interface InvoiceDetail {
    customer_id: any;
    _id: string;
    order_id: string;
    createdAt: string;
    totalPrice: number;
    deliveryInfo: {
        name: string;
        email: string;
        mobile: string;
        address: string;
        city: string;
        country: string;
        postcode: string;
    };
    price: number;
    discountValue: number;
    shippingPrice: number;
    products: [Product];
    tax: number;
    qrCode: string;
    shipping_id: {
        company: string;
        time: string;
    },
    purity_id: [{
        name_ar: string;
        name_en: string;
    }]
}