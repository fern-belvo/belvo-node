/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxStatusObligationsDian: core.serialization.ObjectSchema<
    serializers.TaxStatusObligationsDian.Raw,
    BelvoApi.TaxStatusObligationsDian
> = core.serialization.object({
    obligation: core.serialization.string().optional(),
    expiration: core.serialization.string().optional(),
    initialDate: core.serialization.property("initial_date", core.serialization.string().optional()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
});

export declare namespace TaxStatusObligationsDian {
    interface Raw {
        obligation?: string | null;
        expiration?: string | null;
        initial_date?: string | null;
        end_date?: string | null;
    }
}
