/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxStatusRegimensDian: core.serialization.ObjectSchema<
    serializers.TaxStatusRegimensDian.Raw,
    Belvo.TaxStatusRegimensDian
> = core.serialization.object({
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
    initialDate: core.serialization.property("initial_date", core.serialization.string().optional()),
    regimen: core.serialization.string().optional(),
});

export declare namespace TaxStatusRegimensDian {
    interface Raw {
        end_date?: string | null;
        initial_date?: string | null;
        regimen?: string | null;
    }
}
