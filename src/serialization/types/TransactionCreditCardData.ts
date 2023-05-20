/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TransactionCreditCardData: core.serialization.ObjectSchema<
    serializers.TransactionCreditCardData.Raw,
    Belvo.TransactionCreditCardData
> = core.serialization.object({
    collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
    billName: core.serialization.property("bill_name", core.serialization.string().optional()),
    billStatus: core.serialization.property(
        "bill_status",
        core.serialization.lazy(async () => (await import("..")).EnumTransactionBillStatus).optional()
    ),
    billAmount: core.serialization.property("bill_amount", core.serialization.number().optional()),
    previousBillTotal: core.serialization.property("previous_bill_total", core.serialization.string().optional()),
});

export declare namespace TransactionCreditCardData {
    interface Raw {
        collected_at?: string | null;
        bill_name?: string | null;
        bill_status?: serializers.EnumTransactionBillStatus.Raw | null;
        bill_amount?: number | null;
        previous_bill_total?: string | null;
    }
}
