/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as Belvo from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<
    serializers.paymentWebhooks.registerPaymentWebhook.Response.Raw,
    Belvo.PaymentWebhook[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).PaymentWebhook));

export declare namespace Response {
    type Raw = serializers.PaymentWebhook.Raw[];
}
