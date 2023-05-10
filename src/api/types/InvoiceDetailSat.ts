/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export interface InvoiceDetailSat {
    /** The description of the invoice item (an invoice can have one or more items). */
    description?: string;
    /**
     * The identification code of the product or the service, as defined by the legal entity in the country.
     * - 🇲🇽 [Mexico](http://200.57.3.89/Pys/catPyS.aspx)
     *
     */
    productIdentification?: string;
    /** The quantity of this invoice item. */
    quantity?: number;
    /**
     * The unit of measure, as defined by the legal entity in the country.
     * - 🇲🇽 Mexico [SAT catalog reference](https://developers.belvo.com/docs/sat-catalogs#unit-code)
     *
     */
    unitCode?: string;
    /**
     * The description of the item, as defined by the legal entity in the country.
     * - 🇲🇽 Mexico [SAT catalog reference](https://developers.belvo.com/docs/sat-catalogs#unit-code)
     *
     */
    unitDescription?: string;
    /** The price of one a singular item. */
    unitAmount?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    taxType?: string;
    /** The total price for this item before tax is applied (`quantity` x `unit_amount`). */
    preTaxAmount?: number;
    /** The tax percentage to apply. */
    taxPercentage?: number;
    /** The amount of tax for this invoice item (`pre_tax_amount` x `tax_percentage`). */
    taxAmount?: number;
    /** The total price for this invoice item (`pre_tax_amount` + `tax_amount`). */
    totalAmount?: number;
    /** The retained tax on the invoice item. */
    retainedTaxes?: BelvoApi.InvoiceDetailRetainedTaxSat[];
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
}
