/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxAssessmentIndividual: core.serialization.ObjectSchema<
    serializers.TaxAssessmentIndividual.Raw,
    Belvo.TaxAssessmentIndividual
> = core.serialization.object({
    fortuitousProfitTax: core.serialization.property("fortuitous_profit_tax", core.serialization.number()),
    totalTaxOnTaxableNetIncome: core.serialization.property(
        "total_tax_on_taxable_net_income",
        core.serialization.number()
    ),
    netIncomeTax: core.serialization.property("net_income_tax", core.serialization.number()),
    totalTaxDue: core.serialization.property("total_tax_due", core.serialization.number()),
    previousYearBalance: core.serialization.property("previous_year_balance", core.serialization.number()),
    totalWithheldTax: core.serialization.property("total_withheld_tax", core.serialization.number()),
    balancePayable: core.serialization.property("balance_payable", core.serialization.number()),
    balanceRefundable: core.serialization.property("balance_refundable", core.serialization.number()),
    totalPayment: core.serialization.property("total_payment", core.serialization.number()),
});

export declare namespace TaxAssessmentIndividual {
    interface Raw {
        fortuitous_profit_tax: number;
        total_tax_on_taxable_net_income: number;
        net_income_tax: number;
        total_tax_due: number;
        previous_year_balance: number;
        total_withheld_tax: number;
        balance_payable: number;
        balance_refundable: number;
        total_payment: number;
    }
}
