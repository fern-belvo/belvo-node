/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PatchPaymentIntentsBodyPse: core.serialization.ObjectSchema<
    serializers.PatchPaymentIntentsBodyPse.Raw,
    Belvo.PatchPaymentIntentsBodyPse
> = core.serialization.object({
    pse: core.serialization.lazyObject(async () => (await import("..")).PatchPaymentMethodDetailsPse).optional(),
});

export declare namespace PatchPaymentIntentsBodyPse {
    interface Raw {
        pse?: serializers.PatchPaymentMethodDetailsPse.Raw | null;
    }
}
