/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const BankAccountDetailsOpenFinancePix: core.serialization.ObjectSchema<
    serializers.BankAccountDetailsOpenFinancePix.Raw,
    Belvo.BankAccountDetailsOpenFinancePix
> = core.serialization.object({
    country: core.serialization.lazy(async () => (await import("..")).EnumPaymentsCountry),
    pixKey: core.serialization.property("pix_key", core.serialization.string()),
});

export declare namespace BankAccountDetailsOpenFinancePix {
    interface Raw {
        country: serializers.EnumPaymentsCountry.Raw;
        pix_key: string;
    }
}
