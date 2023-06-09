/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PreconditionError: core.serialization.Schema<
    serializers.PreconditionError.Raw,
    Belvo.TokenRequiredResponse[]
> = core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).TokenRequiredResponse));

export declare namespace PreconditionError {
    type Raw = serializers.TokenRequiredResponse.Raw[];
}
