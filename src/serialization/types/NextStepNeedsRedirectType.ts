/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const NextStepNeedsRedirectType: core.serialization.Schema<
    serializers.NextStepNeedsRedirectType.Raw,
    Belvo.NextStepNeedsRedirectType
> = core.serialization.enum_([
    "open_finance_display_payment_method_information",
    "open_finance_display_confirmation_required",
    "open_finance_display_needs_redirect",
    "open_finance_display_payment_processing",
    "open_finance_display_payment_succeeded",
    "open_finance_display_payment_failed",
]);

export declare namespace NextStepNeedsRedirectType {
    type Raw =
        | "open_finance_display_payment_method_information"
        | "open_finance_display_confirmation_required"
        | "open_finance_display_needs_redirect"
        | "open_finance_display_payment_processing"
        | "open_finance_display_payment_succeeded"
        | "open_finance_display_payment_failed";
}
