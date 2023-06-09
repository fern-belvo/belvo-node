/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EmploymentRecordEntitlement: core.serialization.ObjectSchema<
    serializers.EmploymentRecordEntitlement.Raw,
    Belvo.EmploymentRecordEntitlement
> = core.serialization.object({
    entitledToHealthInsurance: core.serialization.property(
        "entitled_to_health_insurance",
        core.serialization.boolean().optional()
    ),
    entitledToCompanyBenefits: core.serialization.property(
        "entitled_to_company_benefits",
        core.serialization.boolean().optional()
    ),
    validUntil: core.serialization.property("valid_until", core.serialization.string().optional()),
    status: core.serialization.lazy(async () => (await import("..")).EnumEmploymentRecordStatus).optional(),
});

export declare namespace EmploymentRecordEntitlement {
    interface Raw {
        entitled_to_health_insurance?: boolean | null;
        entitled_to_company_benefits?: boolean | null;
        valid_until?: string | null;
        status?: serializers.EnumEmploymentRecordStatus.Raw | null;
    }
}
