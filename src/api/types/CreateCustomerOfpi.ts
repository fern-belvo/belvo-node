/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export interface CreateCustomerOfpi {
    customerType: BelvoApi.EnumCustomerType;
    /**
     * The full name of the customer you want to create.
     *
     */
    name: string;
    country: BelvoApi.EnumPaymentsCountry;
    /**
     * The customer's email address.
     *
     */
    email: string;
    /**
     * The document number of the customer's ID.
     *
     */
    identifier: string;
    identifierType: BelvoApi.EnumCustomerIdentifierTypeOfpi;
    /**
     * The customer's physical address.
     *
     */
    address?: string;
    /**
     * The customer's phone number.
     *
     */
    phone?: string;
}
