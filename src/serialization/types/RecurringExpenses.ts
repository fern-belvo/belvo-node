/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const RecurringExpenses: core.serialization.ObjectSchema<
    serializers.RecurringExpenses.Raw,
    Belvo.RecurringExpenses
> = core.serialization.object({
    id: core.serialization.string().optional(),
    account: core.serialization.lazyObject(async () => (await import("..")).Account).optional(),
    name: core.serialization.string().optional(),
    transactions: core.serialization.list(
        core.serialization.lazyObject(async () => (await import("..")).RecurringExpenseSourceTransaction).optional()
    ),
    frequency: core.serialization.lazy(async () => (await import("..")).EnumRecurringExpenseFrequency),
    averageTransactionAmount: core.serialization.property("average_transaction_amount", core.serialization.number()),
    medianTransactionAmount: core.serialization.property("median_transaction_amount", core.serialization.number()),
    daysSinceLastTransaction: core.serialization.property("days_since_last_transaction", core.serialization.number()),
    category: core.serialization.lazy(async () => (await import("..")).EnumRecurringExpenseCategory),
    paymentType: core.serialization.property(
        "payment_type",
        core.serialization.lazy(async () => (await import("..")).EnumRecurringExpensePaymentType).optional()
    ),
});

export declare namespace RecurringExpenses {
    interface Raw {
        id?: string | null;
        account?: serializers.Account.Raw | null;
        name?: string | null;
        transactions: (serializers.RecurringExpenseSourceTransaction.Raw | null | undefined)[];
        frequency: serializers.EnumRecurringExpenseFrequency.Raw;
        average_transaction_amount: number;
        median_transaction_amount: number;
        days_since_last_transaction: number;
        category: serializers.EnumRecurringExpenseCategory.Raw;
        payment_type?: serializers.EnumRecurringExpensePaymentType.Raw | null;
    }
}
