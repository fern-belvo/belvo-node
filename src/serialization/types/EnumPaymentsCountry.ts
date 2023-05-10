/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumPaymentsCountry: core.serialization.Schema<
    serializers.EnumPaymentsCountry.Raw,
    Belvo.EnumPaymentsCountry
> = core.serialization.enum_(["BRA", "COL"]);

export declare namespace EnumPaymentsCountry {
    type Raw = "BRA" | "COL";
}
