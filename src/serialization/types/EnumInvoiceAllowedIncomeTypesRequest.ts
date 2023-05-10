/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumInvoiceAllowedIncomeTypesRequest: core.serialization.Schema<
    serializers.EnumInvoiceAllowedIncomeTypesRequest.Raw,
    BelvoApi.EnumInvoiceAllowedIncomeTypesRequest
> = core.serialization.enum_([
    "SALARY",
    "GOVERNMENT",
    "INTEREST",
    "RENT",
    "RETIREMENT",
    "FREELANCE",
    "ALTERNATIVE_INCOME",
    "TRANSFER",
    "DEPOSIT",
    "UNKNOWN",
]);

export declare namespace EnumInvoiceAllowedIncomeTypesRequest {
    type Raw =
        | "SALARY"
        | "GOVERNMENT"
        | "INTEREST"
        | "RENT"
        | "RETIREMENT"
        | "FREELANCE"
        | "ALTERNATIVE_INCOME"
        | "TRANSFER"
        | "DEPOSIT"
        | "UNKNOWN";
}
