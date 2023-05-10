/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const AnnualTotalsIndividual: core.serialization.ObjectSchema<
    serializers.AnnualTotalsIndividual.Raw,
    BelvoApi.AnnualTotalsIndividual
> = core.serialization.object({
    totalExemptIncome: core.serialization.property("total_exempt_income", core.serialization.number()),
    totalApplicableDeductions: core.serialization.property("total_applicable_deductions", core.serialization.number()),
    totalExemptionsAndDeductions: core.serialization.property(
        "total_exemptions_and_deductions",
        core.serialization.number()
    ),
    totalOrdinaryNetIncome: core.serialization.property("total_ordinary_net_income", core.serialization.number()),
});

export declare namespace AnnualTotalsIndividual {
    interface Raw {
        total_exempt_income: number;
        total_applicable_deductions: number;
        total_exemptions_and_deductions: number;
        total_ordinary_net_income: number;
    }
}
