/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PaymentIntentPse: core.serialization.ObjectSchema<
    serializers.PaymentIntentPse.Raw,
    Belvo.PaymentIntentPse
> = core.serialization.object({
    id: core.serialization.string(),
    createdAt: core.serialization.property("created_at", core.serialization.string()),
    createdBy: core.serialization.property("created_by", core.serialization.string()),
    customer: core.serialization.string(),
    allowedPaymentMethodTypes: core.serialization.property(
        "allowed_payment_method_types",
        core.serialization.list(
            core.serialization.lazy(async () => (await import("..")).EnumPaymentLinkAllowedPaymentMethod)
        )
    ),
    amount: core.serialization.string(),
    currency: core.serialization.lazy(async () => (await import("..")).EnumPaymentsCurrency),
    description: core.serialization.string(),
    failureCode: core.serialization.property("failure_code", core.serialization.string().optional()),
    failureMessage: core.serialization.property("failure_message", core.serialization.string().optional()),
    metadata: core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional(),
    nextStep: core.serialization.property(
        "next_step",
        core.serialization.lazy(async () => (await import("..")).PaymentIntentPseNextStep)
    ),
    lastError: core.serialization.property(
        "last_error",
        core.serialization.lazy(async () => (await import("..")).PaymentIntentPseLastError)
    ),
    paymentMethodDetails: core.serialization.property(
        "payment_method_details",
        core.serialization.lazyObject(async () => (await import("..")).PaymentIntentPaymentMethodDetailsPse)
    ),
    paymentMethodInformation: core.serialization.property(
        "payment_method_information",
        core.serialization.lazyObject(async () => (await import("..")).PaymentMethodInformationPse)
    ),
    charges: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Charge)).optional(),
    provider: core.serialization.lazy(async () => (await import("..")).EnumPaymentLinkProvider),
    selectedPaymentMethodType: core.serialization.property(
        "selected_payment_method_type",
        core.serialization.lazy(async () => (await import("..")).EnumPaymentLinkAllowedPaymentMethod)
    ),
    status: core.serialization.lazy(async () => (await import("..")).EnumPaymentIntentStatus),
    updatedAt: core.serialization.property("updated_at", core.serialization.string().optional()),
});

export declare namespace PaymentIntentPse {
    interface Raw {
        id: string;
        created_at: string;
        created_by: string;
        customer: string;
        allowed_payment_method_types: serializers.EnumPaymentLinkAllowedPaymentMethod.Raw[];
        amount: string;
        currency: serializers.EnumPaymentsCurrency.Raw;
        description: string;
        failure_code?: string | null;
        failure_message?: string | null;
        metadata?: Record<string, unknown> | null;
        next_step: serializers.PaymentIntentPseNextStep.Raw;
        last_error: serializers.PaymentIntentPseLastError.Raw;
        payment_method_details: serializers.PaymentIntentPaymentMethodDetailsPse.Raw;
        payment_method_information: serializers.PaymentMethodInformationPse.Raw;
        charges?: serializers.Charge.Raw[] | null;
        provider: serializers.EnumPaymentLinkProvider.Raw;
        selected_payment_method_type: serializers.EnumPaymentLinkAllowedPaymentMethod.Raw;
        status: serializers.EnumPaymentIntentStatus.Raw;
        updated_at?: string | null;
    }
}
