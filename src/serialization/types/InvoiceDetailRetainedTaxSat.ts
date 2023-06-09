/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvoiceDetailRetainedTaxSat: core.serialization.ObjectSchema<
    serializers.InvoiceDetailRetainedTaxSat.Raw,
    Belvo.InvoiceDetailRetainedTaxSat
> = core.serialization.object({
    collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
    taxType: core.serialization.property("tax_type", core.serialization.string().optional()),
    tax: core.serialization.string().optional(),
    taxPercentage: core.serialization.property("tax_percentage", core.serialization.number().optional()),
    retainedTaxAmount: core.serialization.property("retained_tax_amount", core.serialization.number().optional()),
});

export declare namespace InvoiceDetailRetainedTaxSat {
    interface Raw {
        collected_at?: string | null;
        tax_type?: string | null;
        tax?: string | null;
        tax_percentage?: number | null;
        retained_tax_amount?: number | null;
    }
}
