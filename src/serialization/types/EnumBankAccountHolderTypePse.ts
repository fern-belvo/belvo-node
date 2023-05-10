/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumBankAccountHolderTypePse: core.serialization.Schema<
    serializers.EnumBankAccountHolderTypePse.Raw,
    Belvo.EnumBankAccountHolderTypePse
> = core.serialization.enum_(["BUSINESS"]);

export declare namespace EnumBankAccountHolderTypePse {
    type Raw = "BUSINESS";
}
