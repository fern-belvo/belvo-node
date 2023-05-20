/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of `next_step` you need to follow.
 *
 */
export type NextStepDisplayPaymentMethodInformationPseType =
    | "pse_display_payment_method_information"
    | "pse_display_credentials_required"
    | "pse_display_needs_redirect"
    | "pse_display_token_required"
    | "pse_display_customer_bank_accounts"
    | "pse_display_confirmation_required"
    | "pse_display_payment_processing"
    | "pse_display_payment_failed"
    | "pse_display_payment_succeeded";

export const NextStepDisplayPaymentMethodInformationPseType = {
    PseDisplayPaymentMethodInformation: "pse_display_payment_method_information",
    PseDisplayCredentialsRequired: "pse_display_credentials_required",
    PseDisplayNeedsRedirect: "pse_display_needs_redirect",
    PseDisplayTokenRequired: "pse_display_token_required",
    PseDisplayCustomerBankAccounts: "pse_display_customer_bank_accounts",
    PseDisplayConfirmationRequired: "pse_display_confirmation_required",
    PseDisplayPaymentProcessing: "pse_display_payment_processing",
    PseDisplayPaymentFailed: "pse_display_payment_failed",
    PseDisplayPaymentSucceeded: "pse_display_payment_succeeded",
} as const;
