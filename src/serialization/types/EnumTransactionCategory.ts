/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumTransactionCategory: core.serialization.Schema<
    serializers.EnumTransactionCategory.Raw,
    Belvo.EnumTransactionCategory
> = core.serialization.string();

export declare namespace EnumTransactionCategory {
    type Raw = string;
}
