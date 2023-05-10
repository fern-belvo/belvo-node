/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxReturnPersonalMonthly: core.serialization.Schema<
    serializers.TaxReturnPersonalMonthly.Raw,
    BelvoApi.TaxReturnPersonalMonthly
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace TaxReturnPersonalMonthly {
    type Raw = Record<string, unknown>;
}
