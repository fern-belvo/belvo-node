/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * A breakdown of the retained taxes
 */
export interface RetentionBreakdown {
    /**
     * The base amount that was used to calculate the tax retention.
     *
     */
    baseAmount?: number;
    /**
     * Optional attribute to indicate the type of tax withheld for the period or year according to the [SAT catalog](https://developers.belvo.com/docs/sat-catalogs#retention-code).
     *
     */
    taxType?: string;
    /**
     * The amount retained.
     *
     */
    retainedAmount?: number;
    paymentStatus?: Belvo.EnumTaxRetentionPaymentStatus;
}
