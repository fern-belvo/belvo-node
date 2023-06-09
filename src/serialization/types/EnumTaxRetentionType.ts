/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumTaxRetentionType: core.serialization.Schema<
    serializers.EnumTaxRetentionType.Raw,
    Belvo.EnumTaxRetentionType
> = core.serialization.enum_(["OUTFLOW", "INFLOW"]);

export declare namespace EnumTaxRetentionType {
    type Raw = "OUTFLOW" | "INFLOW";
}
