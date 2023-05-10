/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface TaxComplianceStatusPaginatedResponse {
    /** The total number of results in your Belvo account. */
    count?: number;
    /**
     * The URL to next page of results. Each page consists of up to 100 items. If there are not enough results for an additional page, the value is `null`.
     *
     * In our documentation example, we use `{endpoint}` as a placeholder value. In production, this value will be replaced by the actual endpoint you are currently using (for example, `accounts` or `owners`).
     *
     */
    next?: string;
    /** The URL to the previous page of results. If there is no previous page, the value is `null`. */
    previous?: string;
    /** Array of tax compliance status objects. */
    results?: Belvo.TaxComplianceStatus[];
}
