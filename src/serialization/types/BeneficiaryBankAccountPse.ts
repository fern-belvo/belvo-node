/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const BeneficiaryBankAccountPse: core.serialization.ObjectSchema<
    serializers.BeneficiaryBankAccountPse.Raw,
    Belvo.BeneficiaryBankAccountPse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    institution: core.serialization.string().optional(),
    number: core.serialization.string().optional(),
    holder: core.serialization.lazyObject(async () => (await import("..")).HolderBusinessResponsePse).optional(),
});

export declare namespace BeneficiaryBankAccountPse {
    interface Raw {
        id?: string | null;
        institution?: string | null;
        number?: string | null;
        holder?: serializers.HolderBusinessResponsePse.Raw | null;
    }
}
