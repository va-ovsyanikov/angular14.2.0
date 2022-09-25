export interface IClient {
    "type": string
    "_id": string
    "amount": number;
    "name": {
        "first": string;
        "last": string;
    },
    "company": string;
    "email": string;
    "phone": string;
    "address": string
}
export interface IClients {
    total: number,
    data: Array<IClient>
}
