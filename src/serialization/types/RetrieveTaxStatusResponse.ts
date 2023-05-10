/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const RetrieveTaxStatusResponse: core.serialization.Schema<
    serializers.RetrieveTaxStatusResponse.Raw,
    Belvo.RetrieveTaxStatusResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).TaxStatusSat),
    core.serialization.lazyObject(async () => (await import("..")).TaxStatusDian),
]);

export declare namespace RetrieveTaxStatusResponse {
    type Raw = serializers.TaxStatusSat.Raw | serializers.TaxStatusDian.Raw;
}
