/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumIncomeStreamFrequency: core.serialization.Schema<
    serializers.EnumIncomeStreamFrequency.Raw,
    BelvoApi.EnumIncomeStreamFrequency
> = core.serialization.enum_(["MONTHLY", "FORTNIGHTLY", "WEEKLY", "IRREGULAR", "SINGLE"]);

export declare namespace EnumIncomeStreamFrequency {
    type Raw = "MONTHLY" | "FORTNIGHTLY" | "WEEKLY" | "IRREGULAR" | "SINGLE";
}
