/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const AccountsBalance: core.serialization.ObjectSchema<
    serializers.AccountsBalance.Raw,
    BelvoApi.AccountsBalance
> = core.serialization.object({
    current: core.serialization.number().optional(),
    available: core.serialization.number().optional(),
});

export declare namespace AccountsBalance {
    interface Raw {
        current?: number | null;
        available?: number | null;
    }
}
