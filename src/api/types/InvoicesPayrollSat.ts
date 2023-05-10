/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface InvoicesPayrollSat {
    /**
     * The number of days covered by the payment.
     *
     */
    days?: number;
    /**
     * The payroll type, as defined by the legal entity of the country.
     *
     * - 🇲🇽 Mexico [SAT catalog reference article](https://developers.belvo.com/docs/sat-catalogs#payroll-type)
     *
     */
    type?: string;
    /**
     * The total amount of the payroll payment.
     *
     */
    amount: number;
    /**
     * The version of the payroll object.
     *
     */
    version: string;
    /**
     * The start date of the payment period.
     *
     */
    dateFrom?: string;
    /**
     * The end date of the payment period.
     *
     */
    dateTo?: string;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /**
     * The payment date.
     *
     */
    paymentDate: string;
}
