/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumLinkRefreshRate: core.serialization.Schema<
    serializers.EnumLinkRefreshRate.Raw,
    BelvoApi.EnumLinkRefreshRate
> = core.serialization.string().optional();

export declare namespace EnumLinkRefreshRate {
    type Raw = string | null | undefined;
}
