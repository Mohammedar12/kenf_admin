export interface UserGroup {
    id: string;
    name_en: string;
    name_ar: string;
    permissions: string[];
    status: string;

}
export interface SearchResult {
    tables: UserGroup[];
    total: number;
}
