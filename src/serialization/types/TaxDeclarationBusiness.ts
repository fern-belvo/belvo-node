/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const TaxDeclarationBusiness: core.serialization.ObjectSchema<
    serializers.TaxDeclarationBusiness.Raw,
    BelvoApi.TaxDeclarationBusiness
> = core.serialization.object({
    id: core.serialization.string(),
    link: core.serialization.string(),
    collectedAt: core.serialization.property("collected_at", core.serialization.string()),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    documentInformation: core.serialization.property(
        "document_information",
        core.serialization.lazyObject(async () => (await import("..")).DocumentInformationBusiness)
    ),
    taxPayerInformation: core.serialization.property(
        "tax_payer_information",
        core.serialization.lazyObject(async () => (await import("..")).TaxPayerInformationBusiness)
    ),
    equityStatement: core.serialization.property(
        "equity_statement",
        core.serialization.lazyObject(async () => (await import("..")).EquityStatementBusiness)
    ),
    annualIncomeStatement: core.serialization.property(
        "annual_income_statement",
        core.serialization.lazyObject(async () => (await import("..")).AnnualIncomeStatementBusiness)
    ),
    annualCostsAndDeductionsStatement: core.serialization.property(
        "annual_costs_and_deductions_statement",
        core.serialization.lazyObject(async () => (await import("..")).AnnualCostsAndDeductionsStatementBusiness)
    ),
    taxAssessment: core.serialization.property(
        "tax_assessment",
        core.serialization.lazyObject(async () => (await import("..")).TaxAssessmentBusiness)
    ),
    dateIssued: core.serialization.property("date_issued", core.serialization.string()),
    pdf: core.serialization.string().optional(),
});

export declare namespace TaxDeclarationBusiness {
    interface Raw {
        id: string;
        link: string;
        collected_at: string;
        created_at: string;
        document_information: serializers.DocumentInformationBusiness.Raw;
        tax_payer_information: serializers.TaxPayerInformationBusiness.Raw;
        equity_statement: serializers.EquityStatementBusiness.Raw;
        annual_income_statement: serializers.AnnualIncomeStatementBusiness.Raw;
        annual_costs_and_deductions_statement: serializers.AnnualCostsAndDeductionsStatementBusiness.Raw;
        tax_assessment: serializers.TaxAssessmentBusiness.Raw;
        date_issued: string;
        pdf?: string | null;
    }
}
