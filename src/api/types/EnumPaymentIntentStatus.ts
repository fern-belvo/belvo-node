/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current status of the payment intent.
 *
 */
export type EnumPaymentIntentStatus =
    | "REQUIRES_PAYMENT_METHOD"
    | "REQUIRES_ACTION"
    | "SUCCEEDED"
    | "PROCESSING"
    | "FAILED";

export const EnumPaymentIntentStatus = {
    RequiresPaymentMethod: "REQUIRES_PAYMENT_METHOD",
    RequiresAction: "REQUIRES_ACTION",
    Succeeded: "SUCCEEDED",
    Processing: "PROCESSING",
    Failed: "FAILED",
} as const;
