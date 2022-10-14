export interface ResourcePage {
    page: number;
    per_page: number;
    total: number;
    total_pages: number,
    data: [
        {
            name: String,
            year: Number
            color: String,
            id?: number,
            pantone_value: String
        }
    ];
}