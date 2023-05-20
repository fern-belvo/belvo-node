/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * Details regarding the account.
 *
 * **Note**: For our recurring expenses resource, this account relates to the account that was analyzed to generate the recurring expenses report.
 *
 */
export interface Account {
    /** The unique identifier created by Belvo used to reference the current account. */
    id?: string;
    /** The `link.id` the account belongs to. */
    link?: string;
    institution?: Belvo.InstitutionAccount;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt?: string;
    category?: Belvo.EnumAccountCategory;
    /**
     * Indicates whether this account is either an `ASSET` or a `LIABILITY`. You can consider the balance of an `ASSET` as being positive, while the balance of a `LIABILITY` as negative.
     *
     */
    balanceType?: string;
    /** The account type, as designated by the institution. */
    type?: string;
    /** The account name, as given by the institution. */
    name?: string;
    /** The account number, as designated by the institution. */
    number?: string;
    balance: Belvo.AccountsBalance;
    /**
     * The currency of the account. For example:
     * - 🇧🇷 BRL (Brazilian Real)
     * - 🇨🇴 COP (Colombian Peso)
     * - 🇲🇽 MXN (Mexican Peso)
     *
     *  Please note that other currencies other than in the list above may be returned.
     */
    currency?: string;
    /**
     * The public name for the type of identification. For example: `"CLABE"`.
     *
     * ℹ️ For 🇧🇷 Brazilian savings and checking accounts, this field will be `AGENCY/ACCOUNT`.
     *
     */
    publicIdentificationName?: string;
    /**
     * The value for the `public_identification_name`.
     *
     * ℹ️ For 🇧🇷 Brazilian savings and checking accounts, this field will be the agency and bank account number, separated by a slash.
     * For example: `0444/45722-0`.
     *
     */
    publicIdentificationValue?: string;
    /** The ISO-8601 timestamp of Belvo's most recent successful access to the institution for the given link. */
    lastAccessedAt?: string;
    creditData?: Belvo.AccountsCreditData;
    loanData?: Belvo.AccountsLoanData;
    /** One or more funds that contribute to the the pension account. */
    fundsData?: Belvo.AccountsFundsData[];
    receivablesData?: Belvo.AccountsReceivablesData;
    /**
     * *This field has been deprecated.*
     *
     * *The institution's product ID for the account type.*
     *
     */
    bankProductId?: string;
    /**
     * *This field has been deprecated.*
     *
     * *The institution's internal identification for the account.*
     *
     */
    internalIdentification?: string;
}
