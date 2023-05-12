/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Belvo from "../../../../../api";
import * as core from "../../../../../core";

export const IncomesRequest: core.serialization.Schema<
    serializers.IncomesRequest.Raw,
    Omit<Belvo.IncomesRequest, "omit" | "fields">
> = core.serialization.object({
    link: core.serialization.string(),
    allowedIncomeTypes: core.serialization.property(
        "allowed_income_types",
        core.serialization
            .list(
                core.serialization.lazy(async () => (await import("../../../..")).EnumInvoiceAllowedIncomeTypesRequest)
            )
            .optional()
    ),
    minimumConfidenceLevel: core.serialization.property(
        "minimum_confidence_level",
        core.serialization
            .lazy(async () => (await import("../../../..")).EnumIncomeMinimumConfidenceLevelRequest)
            .optional()
    ),
    dateFrom: core.serialization.property("date_from", core.serialization.string().optional()),
    dateTo: core.serialization.property("date_to", core.serialization.string().optional()),
    token: core.serialization.string().optional(),
    saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
});

export declare namespace IncomesRequest {
    interface Raw {
        link: string;
        allowed_income_types?: serializers.EnumInvoiceAllowedIncomeTypesRequest.Raw[] | null;
        minimum_confidence_level?: serializers.EnumIncomeMinimumConfidenceLevelRequest.Raw | null;
        date_from?: string | null;
        date_to?: string | null;
        token?: string | null;
        save_data?: boolean | null;
    }
}