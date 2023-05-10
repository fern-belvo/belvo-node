/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const ListPaymentLinksRequestStatus: core.serialization.Schema<
    serializers.ListPaymentLinksRequestStatus.Raw,
    BelvoApi.ListPaymentLinksRequestStatus
> = core.serialization.enum_(["ACTIVE", "INACTIVE"]);

export declare namespace ListPaymentLinksRequestStatus {
    type Raw = "ACTIVE" | "INACTIVE";
}
