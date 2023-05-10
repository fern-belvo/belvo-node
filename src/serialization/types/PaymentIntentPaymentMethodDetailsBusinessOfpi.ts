/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentIntentPaymentMethodDetailsBusinessOfpi: core.serialization.ObjectSchema<
    serializers.PaymentIntentPaymentMethodDetailsBusinessOfpi.Raw,
    Belvo.PaymentIntentPaymentMethodDetailsBusinessOfpi
> = core.serialization.object({
    openFinance: core.serialization.property(
        "open_finance",
        core.serialization.lazyObject(
            async () => (await import("..")).PaymentIntentPaymentMethodDetailsBodyBusinessOfpi
        )
    ),
});

export declare namespace PaymentIntentPaymentMethodDetailsBusinessOfpi {
    interface Raw {
        open_finance: serializers.PaymentIntentPaymentMethodDetailsBodyBusinessOfpi.Raw;
    }
}
