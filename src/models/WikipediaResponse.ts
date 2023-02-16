export interface WikipediaResponse {
    type?: number
    title: string,
    data: WikiObj[]
}
export interface WikiObj {
    title: string
    link: string
}

