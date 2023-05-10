/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumCategorizationTransactionType: core.serialization.Schema<
    serializers.EnumCategorizationTransactionType.Raw,
    Belvo.EnumCategorizationTransactionType
> = core.serialization.enum_(["INFLOW", "OUTFLOW"]);

export declare namespace EnumCategorizationTransactionType {
    type Raw = "INFLOW" | "OUTFLOW";
}
