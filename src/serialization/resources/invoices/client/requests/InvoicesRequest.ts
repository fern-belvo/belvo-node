/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as Belvo from "../../../../../api";
import * as core from "../../../../../core";

export const InvoicesRequest: core.serialization.Schema<
    serializers.InvoicesRequest.Raw,
    Omit<Belvo.InvoicesRequest, "omit" | "fields">
> = core.serialization.object({
    link: core.serialization.string(),
    dateFrom: core.serialization.property("date_from", core.serialization.string()),
    dateTo: core.serialization.property("date_to", core.serialization.string()),
    type: core.serialization.lazy(async () => (await import("../../../..")).EnumInvoiceType).optional(),
    attachXml: core.serialization.property("attach_xml", core.serialization.boolean().optional()),
    saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
});

export declare namespace InvoicesRequest {
    interface Raw {
        link: string;
        date_from: string;
        date_to: string;
        type?: serializers.EnumInvoiceType.Raw | null;
        attach_xml?: boolean | null;
        save_data?: boolean | null;
    }
}
