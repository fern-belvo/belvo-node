/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export interface Institution {
    /** The ID of the institution as designated by Belvo. */
    id?: number;
    /**
     * The name of the institution, as designated by Belvo.
     * Please see our [Institutions](https://developers.belvo.com/docs/institution) DevPortal article for a detailed list of institution names.
     */
    name?: string;
    type?: BelvoApi.EnumInstitutionType;
    /** The URL of the institution's website. */
    website?: string;
    /** The customer-facing name of the institution. */
    displayName?: string;
    /**
     * The country codes where the institution is available, for example:
     * - 🇧🇷 BR (Brazil)
     * - 🇨🇴 CO (Colombia)
     * - 🇲🇽 MX (Mexico)
     *
     */
    countryCodes?: string[];
    /** The primary color on the institution's website. */
    primaryColor?: string;
    /** The URL of the institution's logo. */
    logo?: string;
    /** The URL of the institution's icon logo. */
    iconLogo?: string;
    /** The URL of the institution's text logo. */
    textLogo?: string;
    formFields?: BelvoApi.InstitutionsFormField[];
    /**
     * The features that the institution supports. If the institution has no special features, then Belvo returns an empty array.
     *
     * Here is a list of the available features:
     * - `token_required` indicates that the institution may require a token during link creation or when making any other requests.
     *
     */
    features?: BelvoApi.InstitutionsFeature[];
    /**
     * A list of Belvo resources that you can use with the institution. This list includes one or more of the following resources:
     *
     *   - `ACCOUNTS`
     *   - `BALANCES`
     *   - `INCOMES`
     *   - `INVESTMENTS_PORTFOLIOS`
     *   - `INVESTMENTS_TRANSACTIONS` *This field has been deprecated.*
     *   - `INVOICES`
     *   - `OWNERS`
     *   - `RECURRING_EXPENSES`
     *   - `RISK_INSIGHTS`
     *   - `TRANSACTIONS`
     *   - `TAX_COMPLIANCE_STATUS`
     *   - `TAX_STATUS`
     *   - `TAX_RETURNS`
     *
     */
    resources?: string[];
    integrationType?: BelvoApi.EnumInstitutionIntegrationType;
    status?: BelvoApi.EnumInstitutionStatus;
}
