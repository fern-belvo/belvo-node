/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

/**
 * Object detailing the next steps you should follow for a specific `next_step` type.
 */
export interface NextStepDisplayTokenRequiredPse {
    /**
     * The type of `next_step` you need to follow.
     *
     */
    type?: BelvoApi.NextStepDisplayTokenRequiredPseType;
    pseDisplayTokenRequired?: BelvoApi.DisplayTokenRequiredContentPse;
    /**
     * Boolean that indicates whether the payment intent is ready to be confirmed. This value will return:
     *
     *   - `false` when a customer wants to pay for the very first time. This is so because you still need to input information about your customer in the following steps to process a payment successfully.
     *   - `true` when a customer wants to pay and this is not their first time. This is so because the payment intent has all the information needed about the customer to process a payment.
     *
     *
     * **Note:** When the value is `true`, you'll need to confirm the payment intent. You can do this by making a PATCH request sending through the parameter `confirm: true`.
     */
    readyToConfirm?: boolean;
}
