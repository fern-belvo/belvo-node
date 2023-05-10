/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type NextStepDisplayPaymentFailedType =
    | "open_finance_display_payment_method_information"
    | "open_finance_display_confirmation_required"
    | "open_finance_display_needs_redirect"
    | "open_finance_display_payment_processing"
    | "open_finance_display_payment_succeeded"
    | "open_finance_display_payment_failed";

export const NextStepDisplayPaymentFailedType = {
    OpenFinanceDisplayPaymentMethodInformation: "open_finance_display_payment_method_information",
    OpenFinanceDisplayConfirmationRequired: "open_finance_display_confirmation_required",
    OpenFinanceDisplayNeedsRedirect: "open_finance_display_needs_redirect",
    OpenFinanceDisplayPaymentProcessing: "open_finance_display_payment_processing",
    OpenFinanceDisplayPaymentSucceeded: "open_finance_display_payment_succeeded",
    OpenFinanceDisplayPaymentFailed: "open_finance_display_payment_failed",
} as const;
