/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumTransactionBillStatus: core.serialization.Schema<
    serializers.EnumTransactionBillStatus.Raw,
    Belvo.EnumTransactionBillStatus
> = core.serialization.string().optional();

export declare namespace EnumTransactionBillStatus {
    type Raw = string | null | undefined;
}
