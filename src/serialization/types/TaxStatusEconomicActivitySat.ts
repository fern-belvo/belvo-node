/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxStatusEconomicActivitySat: core.serialization.ObjectSchema<
    serializers.TaxStatusEconomicActivitySat.Raw,
    Belvo.TaxStatusEconomicActivitySat
> = core.serialization.object({
    economicActivity: core.serialization.property("economic_activity", core.serialization.string().optional()),
    initialDate: core.serialization.property("initial_date", core.serialization.string().optional()),
    endDate: core.serialization.property("end_date", core.serialization.string().optional()),
    order: core.serialization.string().optional(),
    percentage: core.serialization.string().optional(),
});

export declare namespace TaxStatusEconomicActivitySat {
    interface Raw {
        economic_activity?: string | null;
        initial_date?: string | null;
        end_date?: string | null;
        order?: string | null;
        percentage?: string | null;
    }
}
