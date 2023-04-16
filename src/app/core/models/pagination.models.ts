export interface Pagination<T> {
    docs: T[],
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
