/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const ReceivableTransactionRequest: core.serialization.ObjectSchema<
    serializers.ReceivableTransactionRequest.Raw,
    BelvoApi.ReceivableTransactionRequest
> = core.serialization.object({
    link: core.serialization.string(),
    dateFrom: core.serialization.property("date_from", core.serialization.string()),
    dateTo: core.serialization.property("date_to", core.serialization.string()),
    token: core.serialization.string().optional(),
    saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
});

export declare namespace ReceivableTransactionRequest {
    interface Raw {
        link: string;
        date_from: string;
        date_to: string;
        token?: string | null;
        save_data?: boolean | null;
    }
}
