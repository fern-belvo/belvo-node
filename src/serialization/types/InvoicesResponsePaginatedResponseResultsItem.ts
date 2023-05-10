/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const InvoicesResponsePaginatedResponseResultsItem: core.serialization.Schema<
    serializers.InvoicesResponsePaginatedResponseResultsItem.Raw,
    BelvoApi.InvoicesResponsePaginatedResponseResultsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).InvoiceWithIdSat),
    core.serialization.lazyObject(async () => (await import("..")).InvoiceDian),
]);

export declare namespace InvoicesResponsePaginatedResponseResultsItem {
    type Raw = serializers.InvoiceWithIdSat.Raw | serializers.InvoiceDian.Raw;
}
