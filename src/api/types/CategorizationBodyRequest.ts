/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface CategorizationBodyRequest {
    /** Your unique ID for the transaction. */
    transactionId: string;
    accountHolderType: Belvo.EnumCategorizationAccountHolderType;
    /** Your unique ID for the account holder. */
    accountHolderId: string;
    /** Your unique ID for the account where the transaction occurred. */
    accountId: string;
    accountCategory: Belvo.EnumCategorizationAccountCategory;
    /** The date when the transaction occurred, in `YYYY-MM-DD` format. */
    valueDate: string;
    /** The description of the transaction. */
    description: string;
    type: Belvo.EnumCategorizationTransactionType;
    /** The transaction amount. */
    amount: number;
    /** The currency of the account, in ISO-4217 format. For example: - 🇧🇷 BRL (Brazilian Real) - 🇨🇴 COP (Colombian Peso) - 🇲🇽 MXN (Mexican Peso) */
    currency: string;
    /**
     * The institution where the account is registered.
     *
     * >**Note:** This is the name that you use in your system to identify an institution.
     */
    institution: string;
    /** The four-digit ISO 18245 Merchant Category Code (MCC). Only required when `account_category` = `CREDIT_CARD`. */
    mcc?: number;
}
