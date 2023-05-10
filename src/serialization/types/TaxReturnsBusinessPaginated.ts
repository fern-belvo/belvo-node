/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxReturnsBusinessPaginated: core.serialization.Schema<
    serializers.TaxReturnsBusinessPaginated.Raw,
    BelvoApi.TaxReturnsBusinessPaginated
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace TaxReturnsBusinessPaginated {
    type Raw = Record<string, unknown>;
}
