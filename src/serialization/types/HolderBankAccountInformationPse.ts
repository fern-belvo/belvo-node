/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const HolderBankAccountInformationPse: core.serialization.ObjectSchema<
    serializers.HolderBankAccountInformationPse.Raw,
    Belvo.HolderBankAccountInformationPse
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string().optional()),
    lastName: core.serialization.property("last_name", core.serialization.string().optional()),
});

export declare namespace HolderBankAccountInformationPse {
    interface Raw {
        first_name?: string | null;
        last_name?: string | null;
    }
}
