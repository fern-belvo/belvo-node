/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentIntentPseNextStep: core.serialization.Schema<
    serializers.PaymentIntentPseNextStep.Raw,
    Belvo.PaymentIntentPseNextStep
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayPaymentMethodInformationPse),
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayCredentialsRequiredPse),
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayNeedsRedirectPse),
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayTokenRequiredPse),
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayCustomerBankAccountsPse),
    core.serialization.lazyObject(async () => (await import("..")).NextStepDisplayConfirmationRequiredPse),
]);

export declare namespace PaymentIntentPseNextStep {
    type Raw =
        | serializers.NextStepDisplayPaymentMethodInformationPse.Raw
        | serializers.NextStepDisplayCredentialsRequiredPse.Raw
        | serializers.NextStepDisplayNeedsRedirectPse.Raw
        | serializers.NextStepDisplayTokenRequiredPse.Raw
        | serializers.NextStepDisplayCustomerBankAccountsPse.Raw
        | serializers.NextStepDisplayConfirmationRequiredPse.Raw;
}
