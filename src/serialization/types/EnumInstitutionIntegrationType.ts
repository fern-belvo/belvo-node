/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumInstitutionIntegrationType: core.serialization.Schema<
    serializers.EnumInstitutionIntegrationType.Raw,
    BelvoApi.EnumInstitutionIntegrationType
> = core.serialization.enum_(["credentials", "openbanking"]);

export declare namespace EnumInstitutionIntegrationType {
    type Raw = "credentials" | "openbanking";
}
