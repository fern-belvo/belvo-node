/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of account.
 * Can be either:
 *   - `CHECKING_ACCOUNT`
 *   - `SAVINGS_ACCOUNT`
 */
export type EnumIncomeVerificationAccountCategory = "CHECKING_ACCOUNT" | "SAVINGS_ACCOUNT";

export const EnumIncomeVerificationAccountCategory = {
    CheckingAccount: "CHECKING_ACCOUNT",
    SavingsAccount: "SAVINGS_ACCOUNT",
} as const;
