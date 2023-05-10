/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EmploymentRecordDetail: core.serialization.ObjectSchema<
    serializers.EmploymentRecordDetail.Raw,
    BelvoApi.EmploymentRecordDetail
> = core.serialization.object({
    collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
    employer: core.serialization.string().optional(),
    employerId: core.serialization.property("employer_id", core.serialization.string().optional()),
    startDate: core.serialization.property("start_date", core.serialization.string().optional()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
    weeksEmployed: core.serialization.property("weeks_employed", core.serialization.number().optional()),
    state: core.serialization.string().optional(),
    mostRecentBaseSalary: core.serialization.property(
        "most_recent_base_salary",
        core.serialization.number().optional()
    ),
    monthlySalary: core.serialization.property("monthly_salary", core.serialization.number().optional()),
    currency: core.serialization.string().optional(),
    employmentStatusUpdates: core.serialization.property(
        "employment_status_updates",
        core.serialization
            .list(
                core.serialization.lazyObject(async () => (await import("..")).EmploymentRecordEmploymentStatusUpdates)
            )
            .optional()
    ),
});

export declare namespace EmploymentRecordDetail {
    interface Raw {
        collected_at?: string | null;
        employer?: string | null;
        employer_id?: string | null;
        start_date?: string | null;
        end_date?: string | null;
        weeks_employed?: number | null;
        state?: string | null;
        most_recent_base_salary?: number | null;
        monthly_salary?: number | null;
        currency?: string | null;
        employment_status_updates?: serializers.EmploymentRecordEmploymentStatusUpdates.Raw[] | null;
    }
}
