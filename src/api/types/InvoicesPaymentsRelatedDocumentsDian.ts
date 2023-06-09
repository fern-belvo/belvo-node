/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * List of all the related deferred invoices affected by the payment.
 */
export interface InvoicesPaymentsRelatedDocumentsDian {
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    invoiceIdentification?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    currency?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    paymentMethod?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    partialityNumber?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    previousBalance?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    amountPaid?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    outstandingBalance?: number;
}
