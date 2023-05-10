/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const PaymentMethodInfoCustomerBankAccountsPse: core.serialization.ObjectSchema<
    serializers.PaymentMethodInfoCustomerBankAccountsPse.Raw,
    BelvoApi.PaymentMethodInfoCustomerBankAccountsPse
> = core.serialization.object({
    id: core.serialization.string().optional(),
    customer: core.serialization.string().optional(),
    institution: core.serialization.lazyObject(async () => (await import("..")).PaymentInstitution).optional(),
    number: core.serialization.string().optional(),
    holder: core.serialization.lazyObject(async () => (await import("..")).HolderBankAccountPse).optional(),
    details: core.serialization
        .lazyObject(async () => (await import("..")).PaymentMethodInformationDetailsPse)
        .optional(),
});

export declare namespace PaymentMethodInfoCustomerBankAccountsPse {
    interface Raw {
        id?: string | null;
        customer?: string | null;
        institution?: serializers.PaymentInstitution.Raw | null;
        number?: string | null;
        holder?: serializers.HolderBankAccountPse.Raw | null;
        details?: serializers.PaymentMethodInformationDetailsPse.Raw | null;
    }
}
