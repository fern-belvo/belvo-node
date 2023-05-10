/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export interface IncomesRequest {
    /** The `link.id` that you want to get information for. */
    link: string;
    allowedIncomeTypes?: BelvoApi.EnumInvoiceAllowedIncomeTypesRequest[];
    minimumConfidenceLevel?: BelvoApi.EnumIncomeMinimumConfidenceLevelRequest;
    /**
     * The date from which you want to start getting incomes for, in `YYYY-MM-DD` format, within the last 365 days. When you use this parameter, you must also send `date_to`.
     *
     * ⚠️ You must have at least 90 days between `date_from` and `date_to`.
     *
     * ⚠️ The value of `date_from` cannot be greater than `date_to`.
     */
    dateFrom?: string;
    /**
     * The date you want to stop getting incomes for, in `YYYY-MM-DD` format, within the last 365 days. When you use this parameter, you must also send `date_from`.
     *
     * ⚠️ You must have at least 90 days between `date_from` and `date_to`.
     *
     * ⚠️ The value of `date_to` cannot be greater than today's date (in other words, no future dates).
     */
    dateTo?: string;
    /** The OTP token generated by the bank. */
    token?: string;
    /**
     * Indicates whether or not to persist the data in Belvo. By default, this is set to `true` and we return a 201 Created response.
     * When set to `false`, the data won't be persisted and we return a 200 OK response.
     */
    saveData?: boolean;
}
