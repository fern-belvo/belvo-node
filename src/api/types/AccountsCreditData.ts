/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface AccountsCreditData {
    /** The maximum amount of credit the owner can receive. */
    creditLimit?: number;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /** The closing date of the credit period. */
    cuttingDate?: string;
    /** The due date for the next payment (`YYYY-MM-DD`). */
    nextPaymentDate?: string;
    /** The minimum amount to be paid on the `next_payment_date`. */
    minimumPayment?: number;
    /** The minimum amount required to pay to avoid generating interest. */
    noInterestPayment?: number;
    /** The annualized interest rate of the credit. */
    interestRate?: number;
    /**
     * *This field has been deprecated.*
     *
     */
    endDate?: string;
    /**
     * *This field has been deprecated.*
     *
     * *The recurrent monthly payment, if applicable.*
     *
     */
    monthlyPayment?: number;
    /**
     * *This field has been deprecated.*
     *
     *
     * *The date when the last credit payment was made.*
     *
     */
    lastPaymentDate?: string;
}
