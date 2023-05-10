/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const InstitutionsPaginatedResponse: core.serialization.ObjectSchema<
    serializers.InstitutionsPaginatedResponse.Raw,
    BelvoApi.InstitutionsPaginatedResponse
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).Institution))
        .optional(),
});

export declare namespace InstitutionsPaginatedResponse {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: serializers.Institution.Raw[] | null;
    }
}
