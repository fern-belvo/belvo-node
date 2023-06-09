/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const HolderBusinessResponsePse: core.serialization.ObjectSchema<
    serializers.HolderBusinessResponsePse.Raw,
    Belvo.HolderBusinessResponsePse
> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("..")).EnumBankAccountHolderTypePse),
    information: core.serialization.property(
        "Information",
        core.serialization.lazyObject(async () => (await import("..")).HolderInformationBusinessPseResponse).optional()
    ),
});

export declare namespace HolderBusinessResponsePse {
    interface Raw {
        type: serializers.EnumBankAccountHolderTypePse.Raw;
        Information?: serializers.HolderInformationBusinessPseResponse.Raw | null;
    }
}
