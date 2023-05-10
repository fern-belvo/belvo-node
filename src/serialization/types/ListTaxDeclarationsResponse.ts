/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const ListTaxDeclarationsResponse: core.serialization.Schema<
    serializers.ListTaxDeclarationsResponse.Raw,
    BelvoApi.ListTaxDeclarationsResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).TaxDeclarationIndividualPaginated),
    core.serialization.lazyObject(async () => (await import("..")).TaxDeclarationBusinessPaginated),
]);

export declare namespace ListTaxDeclarationsResponse {
    type Raw = serializers.TaxDeclarationIndividualPaginated.Raw | serializers.TaxDeclarationBusinessPaginated.Raw;
}
