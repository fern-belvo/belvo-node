/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const AccountsFundsData: core.serialization.ObjectSchema<
    serializers.AccountsFundsData.Raw,
    BelvoApi.AccountsFundsData
> = core.serialization.object({
    collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
    name: core.serialization.string().optional(),
    type: core.serialization.string().optional(),
    publicIdentifications: core.serialization.property(
        "public_identifications",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("..")).AccountsFundsDataPublicIdentifications)
            )
            .optional()
    ),
    balance: core.serialization.number().optional(),
    percentage: core.serialization.number().optional(),
});

export declare namespace AccountsFundsData {
    interface Raw {
        collected_at?: string | null;
        name?: string | null;
        type?: string | null;
        public_identifications?: serializers.AccountsFundsDataPublicIdentifications.Raw[] | null;
        balance?: number | null;
        percentage?: number | null;
    }
}
