/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details about the organization's bank account that will receive the payment.
 */
export interface PaymentLinksPaymentMethodDetailsBodyPse {
    /** Belvo's unique ID used to identify the beneficiary's bank account. */
    beneficiaryBankAccount: string;
    /** The URL to your application that your customer will be directed to once they confirm the payment in their bank application. */
    callbackUrl?: string;
    /** This parameter determines the payment flow of the payment intent. By default, this is set to `true` and the payment intent created is processed using the Belvo's payment flow and Belvo-integrated institutions. When set to `false`, the payment intent process uses institutions not integrated into Belvo's flow. */
    belvoFlow: boolean;
}
