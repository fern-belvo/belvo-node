/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentMethodDetailsOfpi: core.serialization.ObjectSchema<
    serializers.PaymentMethodDetailsOfpi.Raw,
    Belvo.PaymentMethodDetailsOfpi
> = core.serialization.object({
    openFinance: core.serialization.property(
        "open_finance",
        core.serialization.lazyObject(async () => (await import("..")).PaymentLinksPaymentMethodDetailsBodyOfpi)
    ),
});

export declare namespace PaymentMethodDetailsOfpi {
    interface Raw {
        open_finance: serializers.PaymentLinksPaymentMethodDetailsBodyOfpi.Raw;
    }
}
