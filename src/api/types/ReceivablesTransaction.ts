/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface ReceivablesTransaction {
    /** Belvo's unique ID for the current receivable transaction. */
    id: string;
    account: Belvo.ReceivablesTransactionAccount;
    /** The ISO timestamp of when the data point was last updated in Belvo's database. */
    createdAt: string;
    /** The ISO timestamp when the data point was collected. */
    collectedAt: string;
    /** The time that the transaction occurred, according to the institution, in `HH:MM` format. */
    valueHour: string;
    /** The date that the transactions occurred, according to the institution, in `YYYY-MM-DD` format. */
    valueDate: string;
    /**
     * Internal identification number that the acquirer uses to identify the transaction.
     * ℹ️ **Note**: For Brazil, this number is the NSU.
     */
    institutionTransactionId: string;
    /**
     * The currency of the transaction. For example:
     * - 🇧🇷 BRL (Brazilian Real)
     * - 🇨🇴 COP (Colombian Peso)
     * - 🇲🇽 MXN (Mexican Peso)
     *
     *  Please note that currencies other than those listed above may be returned.
     */
    currency: string;
    type?: Belvo.EnumReceivableTransactionType;
    /** The total gross amount of the transaction. */
    grossAmount?: number;
    /** The net amount of the transaction. */
    netAmount?: number;
    fees: Belvo.RecevablesTransactionFees[];
    status: Belvo.EnumReceivableTransactionStatus;
    numberOfInstallments: Belvo.ReceivablesTransactionNumberOfInstallments;
}
