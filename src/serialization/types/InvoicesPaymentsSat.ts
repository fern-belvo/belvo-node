/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvoicesPaymentsSat: core.serialization.ObjectSchema<
    serializers.InvoicesPaymentsSat.Raw,
    Belvo.InvoicesPaymentsSat
> = core.serialization.object({
    date: core.serialization.string().optional(),
    paymentType: core.serialization.property("payment_type", core.serialization.string().optional()),
    currency: core.serialization.string().optional(),
    exchangeRate: core.serialization.property("exchange_rate", core.serialization.string().optional()),
    amount: core.serialization.number().optional(),
    operationNumber: core.serialization.property("operation_number", core.serialization.string().optional()),
    beneficiaryRfc: core.serialization.property("beneficiary_rfc", core.serialization.string().optional()),
    beneficiaryAccountNumber: core.serialization.property(
        "beneficiary_account_number",
        core.serialization.string().optional()
    ),
    payerRfc: core.serialization.property("payer_rfc", core.serialization.string().optional()),
    payerAccountNumber: core.serialization.property("payer_account_number", core.serialization.string().optional()),
    payerBankName: core.serialization.property("payer_bank_name", core.serialization.string().optional()),
    relatedDocuments: core.serialization.property(
        "related_documents",
        core.serialization.list(
            core.serialization.lazyObject(async () => (await import("..")).InvoicesPaymentsRelatedDocumentsSat)
        )
    ),
});

export declare namespace InvoicesPaymentsSat {
    interface Raw {
        date?: string | null;
        payment_type?: string | null;
        currency?: string | null;
        exchange_rate?: string | null;
        amount?: number | null;
        operation_number?: string | null;
        beneficiary_rfc?: string | null;
        beneficiary_account_number?: string | null;
        payer_rfc?: string | null;
        payer_account_number?: string | null;
        payer_bank_name?: string | null;
        related_documents: serializers.InvoicesPaymentsRelatedDocumentsSat.Raw[];
    }
}
