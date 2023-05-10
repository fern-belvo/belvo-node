/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const BadRequestErrorBodyItem: core.serialization.Schema<
    serializers.BadRequestErrorBodyItem.Raw,
    BelvoApi.BadRequestErrorBodyItem
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).InvalidAccessMode),
    core.serialization.lazyObject(async () => (await import("..")).TooManySessionsError),
    core.serialization.lazyObject(async () => (await import("..")).LoginError),
    core.serialization.lazyObject(async () => (await import("..")).SessionExpiredError),
    core.serialization.lazyObject(async () => (await import("..")).ValidationError),
    core.serialization.lazyObject(async () => (await import("..")).InstitutionDownError),
    core.serialization.lazyObject(async () => (await import("..")).InstitutionUnavailableError),
    core.serialization.lazyObject(async () => (await import("..")).InstitutionInactiveError),
    core.serialization.lazyObject(async () => (await import("..")).UnsupportedOperationError),
    core.serialization.lazyObject(async () => (await import("..")).InvalidLinkError),
    core.serialization.lazyObject(async () => (await import("..")).UnconfirmedLinkError),
]);

export declare namespace BadRequestErrorBodyItem {
    type Raw =
        | serializers.InvalidAccessMode.Raw
        | serializers.TooManySessionsError.Raw
        | serializers.LoginError.Raw
        | serializers.SessionExpiredError.Raw
        | serializers.ValidationError.Raw
        | serializers.InstitutionDownError.Raw
        | serializers.InstitutionUnavailableError.Raw
        | serializers.InstitutionInactiveError.Raw
        | serializers.UnsupportedOperationError.Raw
        | serializers.InvalidLinkError.Raw
        | serializers.UnconfirmedLinkError.Raw;
}
