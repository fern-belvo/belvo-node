/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EmploymentRecordEmploymentStatusUpdates: core.serialization.ObjectSchema<
    serializers.EmploymentRecordEmploymentStatusUpdates.Raw,
    BelvoApi.EmploymentRecordEmploymentStatusUpdates
> = core.serialization.object({
    event: core.serialization.lazy(async () => (await import("..")).EnumEmploymentRecordStatusUpdateEvents).optional(),
    baseSalary: core.serialization.property("base_salary", core.serialization.number().optional()),
    updateDate: core.serialization.property("update_date", core.serialization.string().optional()),
});

export declare namespace EmploymentRecordEmploymentStatusUpdates {
    interface Raw {
        event?: serializers.EnumEmploymentRecordStatusUpdateEvents.Raw | null;
        base_salary?: number | null;
        update_date?: string | null;
    }
}
