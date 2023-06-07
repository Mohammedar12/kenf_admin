export interface PaymentMethods {
    id: string;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: PaymentMethods[];
    total: number;
}
