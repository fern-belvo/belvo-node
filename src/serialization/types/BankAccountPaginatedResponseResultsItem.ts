/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const BankAccountPaginatedResponseResultsItem: core.serialization.Schema<
    serializers.BankAccountPaginatedResponseResultsItem.Raw,
    Belvo.BankAccountPaginatedResponseResultsItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).BankAccountOfpiResponse),
    core.serialization.lazyObject(async () => (await import("..")).BankAccountPseResponse),
]);

export declare namespace BankAccountPaginatedResponseResultsItem {
    type Raw = serializers.BankAccountOfpiResponse.Raw | serializers.BankAccountPseResponse.Raw;
}
