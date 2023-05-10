/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumReceivableTransactionFeeType: core.serialization.Schema<
    serializers.EnumReceivableTransactionFeeType.Raw,
    Belvo.EnumReceivableTransactionFeeType
> = core.serialization.enum_(["TRANSACTION_FEE"]);

export declare namespace EnumReceivableTransactionFeeType {
    type Raw = "TRANSACTION_FEE";
}
