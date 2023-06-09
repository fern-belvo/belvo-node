/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const CreateBankAccountPse: core.serialization.ObjectSchema<
    serializers.CreateBankAccountPse.Raw,
    Belvo.CreateBankAccountPse
> = core.serialization.object({
    holder: core.serialization.lazyObject(async () => (await import("..")).HolderBusinessPse),
    providers: core.serialization.lazyObject(async () => (await import("..")).ProvidersPse),
    number: core.serialization.string(),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
});

export declare namespace CreateBankAccountPse {
    interface Raw {
        holder: serializers.HolderBusinessPse.Raw;
        providers: serializers.ProvidersPse.Raw;
        number: string;
        metadata?: Record<string, unknown> | null;
    }
}
