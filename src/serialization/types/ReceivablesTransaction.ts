/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const ReceivablesTransaction: core.serialization.ObjectSchema<
    serializers.ReceivablesTransaction.Raw,
    Belvo.ReceivablesTransaction
> = core.serialization.object({
    id: core.serialization.string(),
    account: core.serialization.lazyObject(async () => (await import("..")).ReceivablesTransactionAccount),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    collectedAt: core.serialization.property("collected_at", core.serialization.string()),
    valueHour: core.serialization.property("value_hour", core.serialization.string()),
    valueDate: core.serialization.property("value_date", core.serialization.string()),
    institutionTransactionId: core.serialization.property("institution_transaction_id", core.serialization.string()),
    currency: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("..")).EnumReceivableTransactionType),
    grossAmount: core.serialization.property("gross_amount", core.serialization.number().optional()),
    netAmount: core.serialization.property("net_amount", core.serialization.number().optional()),
    fees: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).RecevablesTransactionFees)
    ),
    status: core.serialization.lazy(async () => (await import("..")).EnumReceivableTransactionStatus),
    numberOfInstallments: core.serialization.property(
        "number_of_installments",
        core.serialization.lazyObject(async () => (await import("..")).ReceivablesTransactionNumberOfInstallments)
    ),
});

export declare namespace ReceivablesTransaction {
    interface Raw {
        id: string;
        account: serializers.ReceivablesTransactionAccount.Raw;
        created_at: string;
        collected_at: string;
        value_hour: string;
        value_date: string;
        institution_transaction_id: string;
        currency: string;
        type?: serializers.EnumReceivableTransactionType.Raw;
        gross_amount?: number | null;
        net_amount?: number | null;
        fees: serializers.RecevablesTransactionFees.Raw[];
        status: serializers.EnumReceivableTransactionStatus.Raw;
        number_of_installments: serializers.ReceivablesTransactionNumberOfInstallments.Raw;
    }
}
