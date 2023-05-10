/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * Object detailing the next steps you should follow for a specific `next_step` type.
 */
export interface NextStepDisplayPaymentMethodInformation {
    /**
     * The type of `next_step` you need to follow.
     *
     */
    type?: Belvo.NextStepDisplayPaymentMethodInformationType;
    openFinanceDisplayPaymentMethodInformation?: Belvo.DisplayPaymentMethodInformationContentOfpi;
    /**
     * Boolean that indicates whether the payment intent is ready to be confirmed.
     *
     *   **Note:** When set to `true`, you need to confirm the payment by making a PATCH request sending through `confirm: true`.
     */
    readyToConfirm?: boolean;
}
