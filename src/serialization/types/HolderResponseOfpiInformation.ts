/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const HolderResponseOfpiInformation: core.serialization.Schema<
    serializers.HolderResponseOfpiInformation.Raw,
    Belvo.HolderResponseOfpiInformation
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).HolderInformationBusinessOfpiResponse),
    core.serialization.lazyObject(async () => (await import("..")).HolderInformationIndividualOfpiResponse),
]);

export declare namespace HolderResponseOfpiInformation {
    type Raw =
        | serializers.HolderInformationBusinessOfpiResponse.Raw
        | serializers.HolderInformationIndividualOfpiResponse.Raw;
}
