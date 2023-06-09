/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const SecretKeysPaginatedResponse: core.serialization.ObjectSchema<
    serializers.SecretKeysPaginatedResponse.Raw,
    Belvo.SecretKeysPaginatedResponse
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).SecretKeys))
        .optional(),
});

export declare namespace SecretKeysPaginatedResponse {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: serializers.SecretKeys.Raw[] | null;
    }
}
