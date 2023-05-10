/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumCategorizationAccountHolderType: core.serialization.Schema<
    serializers.EnumCategorizationAccountHolderType.Raw,
    BelvoApi.EnumCategorizationAccountHolderType
> = core.serialization.enum_(["INDIVIDUAL", "BUSINESS"]);

export declare namespace EnumCategorizationAccountHolderType {
    type Raw = "INDIVIDUAL" | "BUSINESS";
}
