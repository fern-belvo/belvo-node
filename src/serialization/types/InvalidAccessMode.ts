/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvalidAccessMode: core.serialization.ObjectSchema<
    serializers.InvalidAccessMode.Raw,
    Belvo.InvalidAccessMode
> = core.serialization.object({
    code: core.serialization.string().optional(),
    message: core.serialization.string().optional(),
    requestId: core.serialization.property("request_id", core.serialization.string().optional()),
});

export declare namespace InvalidAccessMode {
    interface Raw {
        code?: string | null;
        message?: string | null;
        request_id?: string | null;
    }
}
