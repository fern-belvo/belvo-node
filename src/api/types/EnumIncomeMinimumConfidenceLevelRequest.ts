/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The minimum confidence level of the incomes you want to get information for.
 *
 * You can send through one of the following values:
 *
 *   - `HIGH`
 *   - `MEDIUM`
 *   - `LOW`
 *
 */
export type EnumIncomeMinimumConfidenceLevelRequest = "HIGH" | "MEDIUM" | "LOW";

export const EnumIncomeMinimumConfidenceLevelRequest = {
    High: "HIGH",
    Medium: "MEDIUM",
    Low: "LOW",
} as const;
