/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const HolderInformationIndividualOfpiResponse: core.serialization.ObjectSchema<
    serializers.HolderInformationIndividualOfpiResponse.Raw,
    Belvo.HolderInformationIndividualOfpiResponse
> = core.serialization.object({
    firstName: core.serialization.property("first_name", core.serialization.string()),
    lastName: core.serialization.property("last_name", core.serialization.string()),
    identifierType: core.serialization.property(
        "identifier_type",
        core.serialization.lazy(async () => (await import("..")).EnumCustomerIdentifierTypeOfpi)
    ),
    identifier: core.serialization.string(),
});

export declare namespace HolderInformationIndividualOfpiResponse {
    interface Raw {
        first_name: string;
        last_name: string;
        identifier_type: serializers.EnumCustomerIdentifierTypeOfpi.Raw;
        identifier: string;
    }
}
