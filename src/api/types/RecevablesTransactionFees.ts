/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

/**
 * Details regarding the fees applied to the transaction.
 */
export interface RecevablesTransactionFees {
    type: BelvoApi.EnumReceivableTransactionFeeType;
    /** The value of `fees.type`. */
    value: number;
}
