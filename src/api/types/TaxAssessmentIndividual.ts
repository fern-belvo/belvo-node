/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Object containing the calculated tax assessment of the tax payer. This includes the total taxable income, the income tax applied, and taxes already withheld.
 */
export interface TaxAssessmentIndividual {
    /** The tax applied on your unexpected income (such as lottery wins or house sales). */
    fortuitousProfitTax: number;
    /** The calculated total tax that can be applied on the tax payer's taxable income (total income - exemptions - deductions). */
    totalTaxOnTaxableNetIncome: number;
    /** After additional deductions that you can apply, this will be the net income tax. If not further deduction are identified, this value will be the same as `total_tax_on_taxable_net_income`. */
    netIncomeTax: number;
    /** After further deductions, this is the final calculated tax that the taxpayer is required to pay. */
    totalTaxDue: number;
    /**
     * Only applicable for DIAN.
     *
     *
     * The amount the tax payer has as a "credit" fromt he previous year (this is equal to the `balance_refundable`) of the previous year.
     *
     */
    previousYearBalance: number;
    /** The total tax already withheld in the current fiscal year. */
    totalWithheldTax: number;
    /** How much the tax payer is required to pay. */
    balancePayable: number;
    /** How much the tax payer is expected to receive. For DIAN, this will count as credit for the next fiscal year (see `previous_year_balance`). */
    balanceRefundable: number;
    /** The total the tax payer is required to pay, taking into account deductions and fiscal credits. */
    totalPayment: number;
}
