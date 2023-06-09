/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const DetailCustomerResponse: core.serialization.Schema<
    serializers.DetailCustomerResponse.Raw,
    Belvo.DetailCustomerResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).CustomerOfpi),
    core.serialization.lazyObject(async () => (await import("..")).CustomerPse),
]);

export declare namespace DetailCustomerResponse {
    type Raw = serializers.CustomerOfpi.Raw | serializers.CustomerPse.Raw;
}
