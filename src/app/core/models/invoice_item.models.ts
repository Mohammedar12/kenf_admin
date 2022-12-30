export interface InvoiceItem {
    customer_id: any;
    _id: string;
    order_id: string;
    createdAt: string;
    totalPrice: string;
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
