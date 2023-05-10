/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export interface InvestmentsPortfolioInstrument {
    /** Belvo's unique ID for the current instrument. */
    id?: string;
    /** The public identifiers for the instrument. */
    publicId?: BelvoApi.InvestmentsPortfolioInstrumentPublicId[];
    type: BelvoApi.EnumInvestmentPortfolioInstrumentType;
    /** The subtype for the instrument, as given by the institution. */
    subtype?: string;
    /** The name of the instrument, as given by the institution. */
    name: string;
    /**
     * The currency of the instrument. For example:
     *
     * - 🇧🇷 BRL (Brazilian Real)
     * - 🇨🇴 COP (Colombian Peso)
     * - 🇲🇽 MXN (Mexican Peso)
     * - 🇺🇸 USD (US Dollar)
     *
     *
     * Please note that other currencies other than in the list above may be returned.
     *
     */
    currency: string;
    /** The current price of one share in the instrument. */
    price?: number;
    /** The total amount of shares owned in the instrument. */
    quantity?: number;
    /** The total gross value of the instrument (including taxes). */
    balanceGross?: number;
    /** The total net value of the instrument (excluding taxes). */
    balanceNet?: number;
    /** The average price of each share acquired in the instrument. */
    averageAcquisitionPrice?: number;
    /** The current profit earned in the instrument. */
    profit?: number;
    /** The start date of the instrument. Only applicable for instruments of type `bond` or `savings`. */
    openDate?: string;
    /**
     * An array of conditions that apply to the instrument in order to retrieve the final value.
     *
     * For example, the due date, the liquidity date, the previdencia type, and so on.
     *
     */
    redemptionConditions?: BelvoApi.InvestmentsPortfolioInstrumentRedemptionConditions[];
    /** An array of fees that apply to the instrument. */
    fees?: BelvoApi.InvestmentsPortfolioInstrumentFees[];
    /** An array of interest rates that apply to the instrument. */
    interestRates?: BelvoApi.InvestmentsPortfolioInstrumentInterestRate[];
}
