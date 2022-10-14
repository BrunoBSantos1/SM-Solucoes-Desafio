export interface ResponseDataResource {
    suport: String
    data:
    {
        name: String,
        year: Number,
        color: String,
        id?: number,
        pantone_value: String
    }
}