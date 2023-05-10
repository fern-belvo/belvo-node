/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EmploymentRecordDocumentId: core.serialization.ObjectSchema<
    serializers.EmploymentRecordDocumentId.Raw,
    BelvoApi.EmploymentRecordDocumentId
> = core.serialization.object({
    documentType: core.serialization.property(
        "document_type",
        core.serialization.lazy(async () => (await import("..")).EnumEmploymentRecordDocumentType).optional()
    ),
    documentNumber: core.serialization.property("document_number", core.serialization.string().optional()),
});

export declare namespace EmploymentRecordDocumentId {
    interface Raw {
        document_type?: serializers.EnumEmploymentRecordDocumentType.Raw | null;
        document_number?: string | null;
    }
}
