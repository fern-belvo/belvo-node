/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const BankAccountOfpiResponseDetails: core.serialization.Schema<
    serializers.BankAccountOfpiResponseDetails.Raw,
    Belvo.BankAccountOfpiResponseDetails
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).BankAccountDetailsOfpi),
    core.serialization.lazyObject(async () => (await import("..")).BankAccountDetailsOfpiPix),
]);

export declare namespace BankAccountOfpiResponseDetails {
    type Raw = serializers.BankAccountDetailsOfpi.Raw | serializers.BankAccountDetailsOfpiPix.Raw;
}
