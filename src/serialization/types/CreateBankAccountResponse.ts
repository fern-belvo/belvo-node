/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const CreateBankAccountResponse: core.serialization.Schema<
    serializers.CreateBankAccountResponse.Raw,
    Belvo.CreateBankAccountResponse
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).BankAccountOfpiResponse),
    core.serialization.lazyObject(async () => (await import("..")).BankAccountPseResponse),
]);

export declare namespace CreateBankAccountResponse {
    type Raw = serializers.BankAccountOfpiResponse.Raw | serializers.BankAccountPseResponse.Raw;
}
