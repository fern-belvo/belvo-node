/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const NotFoundError: core.serialization.Schema<serializers.NotFoundError.Raw, Belvo.NotFoundErrorBody[]> =
    core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).NotFoundErrorBody));

export declare namespace NotFoundError {
    type Raw = serializers.NotFoundErrorBody.Raw[];
}
