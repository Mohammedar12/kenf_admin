export interface InvoiceItem {
    customer: any;
    _id: string;
    id: string;
    tryoto_id: string;
    totalPrice: string;
    paymentInfo:{
        invoiceId: string,
        completedAt: string,
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
}
export interface paginatedInvoices {
    docs: InvoiceItem[],
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
