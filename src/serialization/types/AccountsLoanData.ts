/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const AccountsLoanData: core.serialization.ObjectSchema<
    serializers.AccountsLoanData.Raw,
    BelvoApi.AccountsLoanData
> = core.serialization.object({
    collectedAt: core.serialization.property("collected_at", core.serialization.string()),
    contractAmount: core.serialization.property("contract_amount", core.serialization.number().optional()),
    principal: core.serialization.number().optional(),
    loanType: core.serialization.property("loan_type", core.serialization.string().optional()),
    paymentDay: core.serialization.property("payment_day", core.serialization.string().optional()),
    outstandingPrincipal: core.serialization.property("outstanding_principal", core.serialization.number().optional()),
    outstandingBalance: core.serialization.property("outstanding_balance", core.serialization.number().optional()),
    monthlyPayment: core.serialization.property("monthly_payment", core.serialization.number().optional()),
    interestRates: core.serialization.property(
        "interest_rates",
        core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).AccountsLoanDataInterestRate))
            .optional()
    ),
    fees: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).AccountsLoanDataFees))
        .optional(),
    numberOfInstallmentsTotal: core.serialization.property(
        "number_of_installments_total",
        core.serialization.number().optional()
    ),
    numberOfInstallmentsOutstanding: core.serialization.property(
        "number_of_installments_outstanding",
        core.serialization.number().optional()
    ),
    contractStartDate: core.serialization.property("contract_start_date", core.serialization.string().optional()),
    contractEndDate: core.serialization.property("contract_end_date", core.serialization.string().optional()),
    contractNumber: core.serialization.property("contract_number", core.serialization.string().optional()),
    creditLimit: core.serialization.property("credit_limit", core.serialization.number().optional()),
    lastPeriodBalance: core.serialization.property("last_period_balance", core.serialization.number().optional()),
    interestRate: core.serialization.property("interest_rate", core.serialization.number().optional()),
    limitDay: core.serialization.property("limit_day", core.serialization.string().optional()),
    cuttingDay: core.serialization.property("cutting_day", core.serialization.string().optional()),
    cuttingDate: core.serialization.property("cutting_date", core.serialization.string().optional()),
    lastPaymentDate: core.serialization.property("last_payment_date", core.serialization.string().optional()),
    noInterestPayment: core.serialization.property("no_interest_payment", core.serialization.number().optional()),
});

export declare namespace AccountsLoanData {
    interface Raw {
        collected_at: string;
        contract_amount?: number | null;
        principal?: number | null;
        loan_type?: string | null;
        payment_day?: string | null;
        outstanding_principal?: number | null;
        outstanding_balance?: number | null;
        monthly_payment?: number | null;
        interest_rates?: serializers.AccountsLoanDataInterestRate.Raw[] | null;
        fees?: serializers.AccountsLoanDataFees.Raw[] | null;
        number_of_installments_total?: number | null;
        number_of_installments_outstanding?: number | null;
        contract_start_date?: string | null;
        contract_end_date?: string | null;
        contract_number?: string | null;
        credit_limit?: number | null;
        last_period_balance?: number | null;
        interest_rate?: number | null;
        limit_day?: string | null;
        cutting_day?: string | null;
        cutting_date?: string | null;
        last_payment_date?: string | null;
        no_interest_payment?: number | null;
    }
}
