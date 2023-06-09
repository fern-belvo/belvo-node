/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const LastErrorTwoFactor: core.serialization.ObjectSchema<
    serializers.LastErrorTwoFactor.Raw,
    Belvo.LastErrorTwoFactor
> = core.serialization.object({
    errorCode: core.serialization.property("error_code", core.serialization.string()),
    errorMessage: core.serialization.property("error_message", core.serialization.string()),
});

export declare namespace LastErrorTwoFactor {
    interface Raw {
        error_code: string;
        error_message: string;
    }
}
