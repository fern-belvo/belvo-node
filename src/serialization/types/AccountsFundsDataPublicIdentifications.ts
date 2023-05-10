/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const AccountsFundsDataPublicIdentifications: core.serialization.ObjectSchema<
    serializers.AccountsFundsDataPublicIdentifications.Raw,
    BelvoApi.AccountsFundsDataPublicIdentifications
> = core.serialization.object({
    name: core.serialization.string(),
    value: core.serialization.string().optional(),
});

export declare namespace AccountsFundsDataPublicIdentifications {
    interface Raw {
        name: string;
        value?: string | null;
    }
}
