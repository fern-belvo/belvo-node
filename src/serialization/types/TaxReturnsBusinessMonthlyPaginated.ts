/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxReturnsBusinessMonthlyPaginated: core.serialization.Schema<
    serializers.TaxReturnsBusinessMonthlyPaginated.Raw,
    BelvoApi.TaxReturnsBusinessMonthlyPaginated
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace TaxReturnsBusinessMonthlyPaginated {
    type Raw = Record<string, unknown>;
}
