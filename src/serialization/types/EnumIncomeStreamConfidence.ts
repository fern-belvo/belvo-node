/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumIncomeStreamConfidence: core.serialization.Schema<
    serializers.EnumIncomeStreamConfidence.Raw,
    BelvoApi.EnumIncomeStreamConfidence
> = core.serialization.enum_(["HIGH", "MEDIUM", "LOW"]);

export declare namespace EnumIncomeStreamConfidence {
    type Raw = "HIGH" | "MEDIUM" | "LOW";
}
