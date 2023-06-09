/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentIntentsPaymentMethodDetailsPse: core.serialization.ObjectSchema<
    serializers.PaymentIntentsPaymentMethodDetailsPse.Raw,
    Belvo.PaymentIntentsPaymentMethodDetailsPse
> = core.serialization.object({
    pse: core.serialization.lazyObject(async () => (await import("..")).PaymentIntentsPaymentMethodDetailsBodyPse),
});

export declare namespace PaymentIntentsPaymentMethodDetailsPse {
    interface Raw {
        pse: serializers.PaymentIntentsPaymentMethodDetailsBodyPse.Raw;
    }
}
