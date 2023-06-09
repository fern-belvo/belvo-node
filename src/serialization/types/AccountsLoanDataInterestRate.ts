/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const AccountsLoanDataInterestRate: core.serialization.ObjectSchema<
    serializers.AccountsLoanDataInterestRate.Raw,
    Belvo.AccountsLoanDataInterestRate
> = core.serialization.object({
    name: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("..")).EnumLoanDataInterestRateType).optional(),
    value: core.serialization.number().optional(),
});

export declare namespace AccountsLoanDataInterestRate {
    interface Raw {
        name?: string | null;
        type?: serializers.EnumLoanDataInterestRateType.Raw | null;
        value?: number | null;
    }
}
