/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of customer. Can be either:
 *
 *   - `INDIVIDUAL`
 *   - `BUSINESS`
 *
 *
 * **Notes:** For 🇨🇴 Colombia's PSE, you can only create customers of type `INDIVIDUAL`.
 *
 */
export type EnumCustomerType = "INDIVIDUAL" | "BUSINESS";

export const EnumCustomerType = {
    Individual: "INDIVIDUAL",
    Business: "BUSINESS",
} as const;
