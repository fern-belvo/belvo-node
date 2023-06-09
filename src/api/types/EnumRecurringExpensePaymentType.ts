/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of recurring expense. We return one of the following values:
 *
 *   - `SUBSCRIPTION`
 *   - `REGULAR`
 *
 */
export type EnumRecurringExpensePaymentType = "SUBSCRIPTION" | "REGULAR";

export const EnumRecurringExpensePaymentType = {
    Subscription: "SUBSCRIPTION",
    Regular: "REGULAR",
} as const;
