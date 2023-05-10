/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const ChargePaymentMethodDetails: core.serialization.Schema<
    serializers.ChargePaymentMethodDetails.Raw,
    BelvoApi.ChargePaymentMethodDetails
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).ChargePaymentMethodDetailsPse),
    core.serialization.lazyObject(async () => (await import("..")).ChargePaymentMethodDetailsOfpi),
]);

export declare namespace ChargePaymentMethodDetails {
    type Raw = serializers.ChargePaymentMethodDetailsPse.Raw | serializers.ChargePaymentMethodDetailsOfpi.Raw;
}
