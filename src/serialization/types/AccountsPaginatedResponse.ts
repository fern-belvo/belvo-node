/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const AccountsPaginatedResponse: core.serialization.ObjectSchema<
    serializers.AccountsPaginatedResponse.Raw,
    Belvo.AccountsPaginatedResponse
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).Account).optional())
        .optional(),
});

export declare namespace AccountsPaginatedResponse {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: (serializers.Account.Raw | null | undefined)[] | null;
    }
}
