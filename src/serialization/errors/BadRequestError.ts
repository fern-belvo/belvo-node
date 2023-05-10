/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const BadRequestError: core.serialization.Schema<
    serializers.BadRequestError.Raw,
    BelvoApi.BadRequestErrorBodyItem[]
> = core.serialization.list(core.serialization.lazy(async () => (await import("..")).BadRequestErrorBodyItem));

export declare namespace BadRequestError {
    type Raw = serializers.BadRequestErrorBodyItem.Raw[];
}