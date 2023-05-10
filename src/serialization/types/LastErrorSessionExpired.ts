/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const LastErrorSessionExpired: core.serialization.ObjectSchema<
    serializers.LastErrorSessionExpired.Raw,
    BelvoApi.LastErrorSessionExpired
> = core.serialization.object({
    errorCode: core.serialization.property("error_code", core.serialization.string()),
    errorMessage: core.serialization.property("error_message", core.serialization.string()),
});

export declare namespace LastErrorSessionExpired {
    interface Raw {
        error_code: string;
        error_message: string;
    }
}
