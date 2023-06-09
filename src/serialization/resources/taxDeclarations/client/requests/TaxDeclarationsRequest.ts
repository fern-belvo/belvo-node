/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Belvo from "../../../../../api";
import * as core from "../../../../../core";

export const TaxDeclarationsRequest: core.serialization.Schema<
    serializers.TaxDeclarationsRequest.Raw,
    Omit<Belvo.TaxDeclarationsRequest, "omit" | "fields">
> = core.serialization.object({
    link: core.serialization.string(),
    yearFrom: core.serialization.property("year_from", core.serialization.string()),
    yearTo: core.serialization.property("year_to", core.serialization.string()),
    attachPdf: core.serialization.property("attach_pdf", core.serialization.boolean().optional()),
    saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
});

export declare namespace TaxDeclarationsRequest {
    interface Raw {
        link: string;
        year_from: string;
        year_to: string;
        attach_pdf?: boolean | null;
        save_data?: boolean | null;
    }
}
