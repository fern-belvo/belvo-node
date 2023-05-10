/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumLinkAccessModeResponse: core.serialization.Schema<
    serializers.EnumLinkAccessModeResponse.Raw,
    Belvo.EnumLinkAccessModeResponse
> = core.serialization.string().optional();

export declare namespace EnumLinkAccessModeResponse {
    type Raw = string | null | undefined;
}
