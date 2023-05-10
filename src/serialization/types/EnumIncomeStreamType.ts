/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumIncomeStreamType: core.serialization.Schema<
    serializers.EnumIncomeStreamType.Raw,
    Belvo.EnumIncomeStreamType
> = core.serialization.enum_([
    "SALARY",
    "GOVERNMENT",
    "INTEREST",
    "RENT",
    "RETIREMENT",
    "FREELANCE",
    "ALTERNATIVE_INCOME",
    "TRANSFER",
    "DEPOSIT",
    "UNKNOWN",
]);

export declare namespace EnumIncomeStreamType {
    type Raw =
        | "SALARY"
        | "GOVERNMENT"
        | "INTEREST"
        | "RENT"
        | "RETIREMENT"
        | "FREELANCE"
        | "ALTERNATIVE_INCOME"
        | "TRANSFER"
        | "DEPOSIT"
        | "UNKNOWN";
}
