/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const BeneficiaryBankAccountOfpi: core.serialization.ObjectSchema<
    serializers.BeneficiaryBankAccountOfpi.Raw,
    BelvoApi.BeneficiaryBankAccountOfpi
> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    createdBy: core.serialization.property("created_by", core.serialization.string()),
    institution: core.serialization.lazyObject(async () => (await import("..")).PaymentInstitution),
    details: core.serialization.lazy(async () => (await import("..")).BeneficiaryBankAccountOfpiDetails).optional(),
    holder: core.serialization.lazyObject(async () => (await import("..")).HolderResponseOfpi),
});

export declare namespace BeneficiaryBankAccountOfpi {
    interface Raw {
        id: string;
        created_at: string;
        created_by: string;
        institution: serializers.PaymentInstitution.Raw;
        details?: serializers.BeneficiaryBankAccountOfpiDetails.Raw | null;
        holder: serializers.HolderResponseOfpi.Raw;
    }
}
