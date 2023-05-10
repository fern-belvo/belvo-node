/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface TaxStatusDian {
    /** Unique identifier created by Belvo used to reference the current Tax Status. */
    id: string;
    /** The `link.id` that the tax status is associated with. */
    link: string;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt: string;
    /** The date when the tax status was issued. For example, `2020-08-05/18:55:16`. */
    placeAndDateOfIssuance?: string;
    /**
     * The name of the business.
     *
     * Note: For individuals in Colombia, this field will return `null`.
     *
     */
    officialName?: string;
    /**
     * The taxpayer's *Cédula de ciudadanía* (CC) ID. Only applicable for individuals.
     *
     */
    idCif?: string;
    taxPayerInformation: Belvo.TaxStatusTaxPayerInformationDian;
    address: Belvo.TaxStatusAddressDian;
    /**
     * A list of economic activity objects.
     *
     */
    economicActivity?: Belvo.TaxStatusEconomicActivityDian[];
    /**
     * A list of regimen objects.
     *
     */
    regimes?: Belvo.TaxStatusRegimensDian[];
    /**
     * Details regarding a business's obligations.
     *
     * ℹ️ For non-business accounts, this field will return empty.
     *
     */
    obligations?: Belvo.TaxStatusObligationsDian[];
    /** The validation certificate of the document. */
    digitalStamp?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    digitalStampChain?: string;
    /** Tax status PDF as a binary string. */
    pdf?: string;
}
