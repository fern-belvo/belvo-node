/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const DisplayPaymentMethodInformationContentPse: core.serialization.ObjectSchema<
    serializers.DisplayPaymentMethodInformationContentPse.Raw,
    BelvoApi.DisplayPaymentMethodInformationContentPse
> = core.serialization.object({
    customerBankAccounts: core.serialization.property(
        "customer_bank_accounts",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("..")).PaymentMethodInfoCustomerBankAccountsPse)
            )
            .optional()
    ),
    institutions: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).PaymentInstitution))
        .optional(),
});

export declare namespace DisplayPaymentMethodInformationContentPse {
    interface Raw {
        customer_bank_accounts?: serializers.PaymentMethodInfoCustomerBankAccountsPse.Raw[] | null;
        institutions?: serializers.PaymentInstitution.Raw[] | null;
    }
}
