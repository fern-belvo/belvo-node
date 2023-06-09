/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumTransactionType: core.serialization.Schema<
    serializers.EnumTransactionType.Raw,
    Belvo.EnumTransactionType
> = core.serialization.string();

export declare namespace EnumTransactionType {
    type Raw = string;
}
