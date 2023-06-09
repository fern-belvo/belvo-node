/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface InvoicesPaymentsDian {
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    date?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    paymentType?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    currency?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    exchangeRate?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    amount?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    operationNumber?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    beneficiaryRfc?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    beneficiaryAccountNumber?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    payerRfc?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    payerAccountNumber?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    payerBankName?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    relatedDocuments: Belvo.InvoicesPaymentsRelatedDocumentsDian[];
}
