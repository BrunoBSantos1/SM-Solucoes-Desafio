export interface UserPage {
    page: number;
    per_page: number;
    total: number;
    total_pages: number,
    data: [
        {
            avatar: String,
            email: String
            first_name: String,
            id?: number,
            last_name: String
        }
    ];
}