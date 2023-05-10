/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import * as BelvoApi from "../../../../api";
import * as core from "../../../../core";

export const Response: core.serialization.Schema<serializers.incomes.patchIncomes.Response.Raw, BelvoApi.Income[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).Income));

export declare namespace Response {
    type Raw = serializers.Income.Raw[];
}
