/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumPaymentIntentHolderTypePse: core.serialization.Schema<
    serializers.EnumPaymentIntentHolderTypePse.Raw,
    Belvo.EnumPaymentIntentHolderTypePse
> = core.serialization.enum_(["INDIVIDUAL", "BUSINESS"]);

export declare namespace EnumPaymentIntentHolderTypePse {
    type Raw = "INDIVIDUAL" | "BUSINESS";
}
