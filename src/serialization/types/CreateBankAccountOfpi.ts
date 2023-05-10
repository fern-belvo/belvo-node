/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const CreateBankAccountOfpi: core.serialization.ObjectSchema<
    serializers.CreateBankAccountOfpi.Raw,
    BelvoApi.CreateBankAccountOfpi
> = core.serialization.object({
    institution: core.serialization.string(),
    holder: core.serialization.lazyObject(async () => (await import("..")).BankAccountHolderRequestOfpi),
    details: core.serialization.lazy(async () => (await import("..")).CreateBankAccountOfpiDetails),
});

export declare namespace CreateBankAccountOfpi {
    interface Raw {
        institution: string;
        holder: serializers.BankAccountHolderRequestOfpi.Raw;
        details: serializers.CreateBankAccountOfpiDetails.Raw;
    }
}
