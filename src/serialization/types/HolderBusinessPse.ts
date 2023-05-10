/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const HolderBusinessPse: core.serialization.ObjectSchema<
    serializers.HolderBusinessPse.Raw,
    BelvoApi.HolderBusinessPse
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).EnumBankAccountHolderTypePse),
    information: core.serialization.lazyObject(async () => (await import("..")).HolderInformationBusinessPse),
});

export declare namespace HolderBusinessPse {
    interface Raw {
        type: serializers.EnumBankAccountHolderTypePse.Raw;
        information: serializers.HolderInformationBusinessPse.Raw;
    }
}
