/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentLinkPaginatedResponseResultsItem: core.serialization.Schema<
    serializers.PaymentLinkPaginatedResponseResultsItem.Raw,
    Belvo.PaymentLinkPaginatedResponseResultsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).PaymentLinkListOfpi),
    core.serialization.lazyObject(async () => (await import("..")).PaymentLinkListPse),
]);

export declare namespace PaymentLinkPaginatedResponseResultsItem {
    type Raw = serializers.PaymentLinkListOfpi.Raw | serializers.PaymentLinkListPse.Raw;
}
