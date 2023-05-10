/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const NextStepDisplayCredentialsRequiredPseType: core.serialization.Schema<
    serializers.NextStepDisplayCredentialsRequiredPseType.Raw,
    BelvoApi.NextStepDisplayCredentialsRequiredPseType
> = core.serialization.enum_([
    "pse_display_payment_method_information",
    "pse_display_credentials_required",
    "pse_display_needs_redirect",
    "pse_display_token_required",
    "pse_display_customer_bank_accounts",
    "pse_display_confirmation_required",
    "pse_display_payment_processing",
    "pse_display_payment_failed",
    "pse_display_payment_succeeded",
]);

export declare namespace NextStepDisplayCredentialsRequiredPseType {
    type Raw =
        | "pse_display_payment_method_information"
        | "pse_display_credentials_required"
        | "pse_display_needs_redirect"
        | "pse_display_token_required"
        | "pse_display_customer_bank_accounts"
        | "pse_display_confirmation_required"
        | "pse_display_payment_processing"
        | "pse_display_payment_failed"
        | "pse_display_payment_succeeded";
}
