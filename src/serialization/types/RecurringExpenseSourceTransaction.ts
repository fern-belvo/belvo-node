/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const RecurringExpenseSourceTransaction: core.serialization.ObjectSchema<
    serializers.RecurringExpenseSourceTransaction.Raw,
    Belvo.RecurringExpenseSourceTransaction
> = core.serialization.object({
    amount: core.serialization.number(),
    description: core.serialization.string().optional(),
    valueDate: core.serialization.property("value_date", core.serialization.string()),
});

export declare namespace RecurringExpenseSourceTransaction {
    interface Raw {
        amount: number;
        description?: string | null;
        value_date: string;
    }
}
