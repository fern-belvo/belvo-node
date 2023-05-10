/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const DetailCreatePaymentlinkResponse: core.serialization.Schema<
    serializers.DetailCreatePaymentlinkResponse.Raw,
    Belvo.DetailCreatePaymentlinkResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).PaymentLinkOfpi),
    core.serialization.lazyObject(async () => (await import("..")).PaymentLinkPse),
]);

export declare namespace DetailCreatePaymentlinkResponse {
    type Raw = serializers.PaymentLinkOfpi.Raw | serializers.PaymentLinkPse.Raw;
}
