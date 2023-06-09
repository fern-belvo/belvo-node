/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details regarding the taxpayer.
 */
export interface TaxStatusTaxPayerInformationDian {
    /**
     * The tax payers's identification number (NIT).
     *
     */
    rfc?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    curp?: string;
    /** The tax payers's first name. */
    name?: string;
    /** The tax payers's first last name. */
    firstLastName?: string;
    /** The tax payers's second last name. */
    secondLastName?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    startOperationsDate?: string;
    /** **Note**: This field is not applicable for DIAN Colombia and will return `null`. */
    statusPadron?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    lastStatusChangeDate?: string;
    /**
     * The name of the business designated for consumers and the general public.
     *
     * **Note**: Only applicable for businesses.
     *
     */
    commercialName?: string;
    /**
     * The unique and exclusive name within the national territory that companies receive for legal or administrative purposes.
     * **Note**: Only applicable for businesses.
     */
    socialName?: string;
    /** Contact email address for the tax payer. */
    email?: string;
    /** Contact phone number for the tax payer. */
    phone?: string;
}
