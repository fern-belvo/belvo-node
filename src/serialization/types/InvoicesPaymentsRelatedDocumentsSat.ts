/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvoicesPaymentsRelatedDocumentsSat: core.serialization.ObjectSchema<
    serializers.InvoicesPaymentsRelatedDocumentsSat.Raw,
    Belvo.InvoicesPaymentsRelatedDocumentsSat
> = core.serialization.object({
    invoiceIdentification: core.serialization.property(
        "invoice_identification",
        core.serialization.string().optional()
    ),
    currency: core.serialization.string().optional(),
    paymentMethod: core.serialization.property("payment_method", core.serialization.string().optional()),
    partialityNumber: core.serialization.property("partiality_number", core.serialization.number().optional()),
    previousBalance: core.serialization.property("previous_balance", core.serialization.number().optional()),
    amountPaid: core.serialization.property("amount_paid", core.serialization.number().optional()),
    outstandingBalance: core.serialization.property("outstanding_balance", core.serialization.number().optional()),
});

export declare namespace InvoicesPaymentsRelatedDocumentsSat {
    interface Raw {
        invoice_identification?: string | null;
        currency?: string | null;
        payment_method?: string | null;
        partiality_number?: number | null;
        previous_balance?: number | null;
        amount_paid?: number | null;
        outstanding_balance?: number | null;
    }
}
