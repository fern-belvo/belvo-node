/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListCustomersRequest {
    page?: number;
    idIn?: string;
    createdAt?: string;
    createdAtGt?: string;
    createdAtGte?: string;
    createdAtLt?: string;
    createdAtLte?: string;
    createdAtRange?: string;
    customerType?: string;
    search?: string;
}
