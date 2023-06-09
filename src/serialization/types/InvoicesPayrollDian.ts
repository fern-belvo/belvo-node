/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvoicesPayrollDian: core.serialization.ObjectSchema<
    serializers.InvoicesPayrollDian.Raw,
    Belvo.InvoicesPayrollDian
> = core.serialization.object({
    days: core.serialization.number().optional(),
    type: core.serialization.string().optional(),
    amount: core.serialization.number().optional(),
    version: core.serialization.string().optional(),
    dateFrom: core.serialization.property("date_from", core.serialization.string().optional()),
    dateTo: core.serialization.property("date_to", core.serialization.string().optional()),
    collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
    paymentDate: core.serialization.property("payment_date", core.serialization.string().optional()),
});

export declare namespace InvoicesPayrollDian {
    interface Raw {
        days?: number | null;
        type?: string | null;
        amount?: number | null;
        version?: string | null;
        date_from?: string | null;
        date_to?: string | null;
        collected_at?: string | null;
        payment_date?: string | null;
    }
}
