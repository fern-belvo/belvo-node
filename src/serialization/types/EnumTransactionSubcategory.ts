/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumTransactionSubcategory: core.serialization.Schema<
    serializers.EnumTransactionSubcategory.Raw,
    Belvo.EnumTransactionSubcategory
> = core.serialization.string();

export declare namespace EnumTransactionSubcategory {
    type Raw = string;
}
