/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Belvo from "../../../../../api";
import * as core from "../../../../../core";

export const PatchPaymentIntentPse: core.serialization.Schema<
    serializers.PatchPaymentIntentPse.Raw,
    Belvo.PatchPaymentIntentPse
> = core.serialization.object({
    paymentMethodDetails: core.serialization.property(
        "payment_method_details",
        core.serialization.lazyObject(async () => (await import("../../../..")).PatchPaymentIntentsBodyPse)
    ),
    confirm: core.serialization.boolean().optional(),
});

export declare namespace PatchPaymentIntentPse {
    interface Raw {
        payment_method_details: serializers.PatchPaymentIntentsBodyPse.Raw;
        confirm?: boolean | null;
    }
}
