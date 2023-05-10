/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * Object detailing the next steps you should follow for a specific `next_step` type.
 */
export interface NextStepDisplayCustomerBankAccountsPse {
    /**
     * The type of `next_step` you need to follow.
     *
     */
    type?: Belvo.NextStepDisplayCustomerBankAccountsPseType;
    pseDisplayCustomerBankAccounts?: Belvo.DisplayCustomerBankAccountsContentPse;
    /**
     * Boolean that indicates whether the payment intent is ready to be confirmed.
     *
     *   **Note:** When the value is `true`, you'll need to make a PATCH request sending through `confirm: true` to confirm the payment.
     */
    readyToConfirm?: boolean;
}
