interface Product {

}
export interface InvoiceDetail {
    customer: any;
    _id: string;
    id: string;
    tryoto_id: string;
    createdAt: string;
    totalPrice: number;
    deliveryInfo: {
        name: string;
        email: string;
        mobile: string;
        address: string;
        city: string;
        country: string;
        zipCode: string;
    };
    billingInfo: {
        name: string;
        email: string;
        mobile: string;
        address: string;
        city: string;
        country: string;
        zipCode: string;
    };
    price: number;
    discount: number;
    shippingPrice: number;
    items: [{
        product: Product;
        price: number;
        quantity: number;
    }];
    paymentInfo:{
        invoiceId: string,
        completedAt: string,
    };
    tax: number;
    qrCode: string;
    shipping: {
        id: string;
        company: string;
        time: string;
    },
}