/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The categories of the incomes you want to get information for.
 * You can send through one or more of the following values:
 *   - `SALARY`
 *   - `GOVERNMENT`
 *   - `INTEREST`
 *   - `RENT`
 *   - `RETIREMENT`
 *   - `FREELANCE`
 *   - `ALTERNATIVE_INCOME`
 *   - `TRANSFER`
 *   - `DEPOSIT`
 *   - `UNKNOWN`
 */
export type EnumInvoiceAllowedIncomeTypesRequest =
    | "SALARY"
    | "GOVERNMENT"
    | "INTEREST"
    | "RENT"
    | "RETIREMENT"
    | "FREELANCE"
    | "ALTERNATIVE_INCOME"
    | "TRANSFER"
    | "DEPOSIT"
    | "UNKNOWN";

export const EnumInvoiceAllowedIncomeTypesRequest = {
    Salary: "SALARY",
    Government: "GOVERNMENT",
    Interest: "INTEREST",
    Rent: "RENT",
    Retirement: "RETIREMENT",
    Freelance: "FREELANCE",
    AlternativeIncome: "ALTERNATIVE_INCOME",
    Transfer: "TRANSFER",
    Deposit: "DEPOSIT",
    Unknown: "UNKNOWN",
} as const;
