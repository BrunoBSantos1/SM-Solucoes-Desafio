export interface ResponseDataUser {
    suport: String
    data:
    {
        avatar: String,
        email: String
        first_name: String,
        id?: number,
        last_name: String
    }
}