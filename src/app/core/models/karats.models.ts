export interface Karats {
    id: string;
    name_en: string;
    name_ar: string;
    status: string;

}
export interface SearchResult {
    tables: Karats[];
    total: number;
}
