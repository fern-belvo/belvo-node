/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Information about the payer of a PSE payment.
 */
export interface ChargePaymentMethodDetailsOfpiContent {
    /** Unique identifier for the payer’s institution. */
    payerInstitution?: string;
    /** Belvo's unique ID used to identify the beneficiary's bank account. */
    beneficiaryBankAccount?: string;
}
