/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Object containing the declared net income of the tax payer. The values are calculated as the `gross_income` - `non_taxable_income`.
 */
export interface NetIncomeIndividual {
    /** Income received from employment. */
    earnedIncome: number;
    /** Income received from emitted invoices (for example, income independent contractors or freelancers receive). */
    feeBasedIncome: number;
    /** Income received from an investment (such as dividends or from renting a property). */
    capitalIncome: number;
    /** Income that cannot be classified into the other three fields (such as income from cryptocurrencies or regular transfers from parents). */
    nonLaborIncome: number;
}
