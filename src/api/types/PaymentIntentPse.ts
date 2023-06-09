/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface PaymentIntentPse {
    /** Belvo's unique ID for the current payment intent. */
    id: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt: string;
    /** Belvo's unique ID for the user that created this payment intent. */
    createdBy: string;
    /** Belvo's unique ID for the customer related to this payment intent. */
    customer: string;
    /** A list of payment method types allowed in this payment intent. For PSE, the value will be `pse`. */
    allowedPaymentMethodTypes: Belvo.EnumPaymentLinkAllowedPaymentMethod[];
    /**
     * Amount to be paid by your customer.
     *
     */
    amount: string;
    currency: Belvo.EnumPaymentsCurrency;
    /**
     * The description of the payment.
     *
     */
    description: string;
    /**
     * Error code that explains the reason behind a payment being unsuccessful (if applicable).
     *
     */
    failureCode?: string;
    /**
     * Further information regarding the `failure_code`.
     *
     */
    failureMessage?: string;
    /**
     * Optional and customizable object where you can provide any additional key-value pairs for your internal purposes. For example, an internal reference number.
     *
     * ⚠️ **Note**: You can only provide up to 50 keys (keys can have up to 50 characters each and each value can be up to 500 characters). We do not support nested objects, only ASCII values.
     */
    metadata?: Record<string, unknown>;
    nextStep: Belvo.PaymentIntentPseNextStep;
    lastError: Belvo.PaymentIntentPseLastError;
    paymentMethodDetails: Belvo.PaymentIntentPaymentMethodDetailsPse;
    paymentMethodInformation: Belvo.PaymentMethodInformationPse;
    /**
     * An array of charge objects related to this paymnet intent. If no charges are associated, we return an empty array.
     *
     * **Note**: The charges resource will be deprecated and removed from our API by end of Q1 2023. We recommend not using any data from this resource.
     */
    charges?: Belvo.Charge[];
    provider: Belvo.EnumPaymentLinkProvider;
    selectedPaymentMethodType: Belvo.EnumPaymentLinkAllowedPaymentMethod;
    status: Belvo.EnumPaymentIntentStatus;
    /**
     * The ISO-8601 timestamp of when the payment intent was last updated.
     *
     */
    updatedAt?: string;
}
