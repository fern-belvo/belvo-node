/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const AsynchronousAccepted202: core.serialization.ObjectSchema<
    serializers.AsynchronousAccepted202.Raw,
    Belvo.AsynchronousAccepted202
> = core.serialization.object({
    requestId: core.serialization.property("request_id", core.serialization.string().optional()),
});

export declare namespace AsynchronousAccepted202 {
    interface Raw {
        request_id?: string | null;
    }
}
