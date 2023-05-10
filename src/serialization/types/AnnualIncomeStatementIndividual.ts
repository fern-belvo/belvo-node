/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const AnnualIncomeStatementIndividual: core.serialization.ObjectSchema<
    serializers.AnnualIncomeStatementIndividual.Raw,
    Belvo.AnnualIncomeStatementIndividual
> = core.serialization.object({
    grossIncome: core.serialization.property(
        "gross_income",
        core.serialization.lazyObject(async () => (await import("..")).GrossIncomeIndividual)
    ),
    nonTaxableIncome: core.serialization.property(
        "non_taxable_income",
        core.serialization.lazyObject(async () => (await import("..")).NonTaxableIncomeIndividual)
    ),
    netIncome: core.serialization.property(
        "net_income",
        core.serialization.lazyObject(async () => (await import("..")).NetIncomeIndividual)
    ),
    annualTotals: core.serialization.property(
        "annual_totals",
        core.serialization.lazyObject(async () => (await import("..")).AnnualTotalsIndividual)
    ),
});

export declare namespace AnnualIncomeStatementIndividual {
    interface Raw {
        gross_income: serializers.GrossIncomeIndividual.Raw;
        non_taxable_income: serializers.NonTaxableIncomeIndividual.Raw;
        net_income: serializers.NetIncomeIndividual.Raw;
        annual_totals: serializers.AnnualTotalsIndividual.Raw;
    }
}
