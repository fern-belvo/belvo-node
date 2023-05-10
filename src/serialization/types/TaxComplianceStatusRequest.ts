/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxComplianceStatusRequest: core.serialization.ObjectSchema<
    serializers.TaxComplianceStatusRequest.Raw,
    BelvoApi.TaxComplianceStatusRequest
> = core.serialization.object({
    link: core.serialization.string(),
    attachPdf: core.serialization.property("attach_pdf", core.serialization.boolean().optional()),
    saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
});

export declare namespace TaxComplianceStatusRequest {
    interface Raw {
        link: string;
        attach_pdf?: boolean | null;
        save_data?: boolean | null;
    }
}
