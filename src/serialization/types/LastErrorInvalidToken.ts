/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const LastErrorInvalidToken: core.serialization.ObjectSchema<
    serializers.LastErrorInvalidToken.Raw,
    Belvo.LastErrorInvalidToken
> = core.serialization.object({
    errorCode: core.serialization.property("error_code", core.serialization.string()),
    errorMessage: core.serialization.property("error_message", core.serialization.string()),
});

export declare namespace LastErrorInvalidToken {
    interface Raw {
        error_code: string;
        error_message: string;
    }
}
