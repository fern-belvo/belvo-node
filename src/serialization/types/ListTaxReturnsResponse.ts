/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const ListTaxReturnsResponse: core.serialization.Schema<
    serializers.ListTaxReturnsResponse.Raw,
    BelvoApi.ListTaxReturnsResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazy(async () => (await import("..")).TaxReturnsPersonalPaginated),
    core.serialization.lazy(async () => (await import("..")).TaxReturnsPersonalMonthlyPaginated),
    core.serialization.lazy(async () => (await import("..")).TaxReturnsBusinessPaginated),
    core.serialization.lazy(async () => (await import("..")).TaxReturnsBusinessMonthlyPaginated),
]);

export declare namespace ListTaxReturnsResponse {
    type Raw =
        | serializers.TaxReturnsPersonalPaginated.Raw
        | serializers.TaxReturnsPersonalMonthlyPaginated.Raw
        | serializers.TaxReturnsBusinessPaginated.Raw
        | serializers.TaxReturnsBusinessMonthlyPaginated.Raw;
}
