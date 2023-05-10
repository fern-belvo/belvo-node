/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "../../../..";

export interface PatchPaymentIntentPse {
    paymentMethodDetails: Belvo.PatchPaymentIntentsBodyPse;
    /**
     * Boolean that indicates whether this request confirms the payment intent.
     *
     * **Note:** You'll need to send this parameter set to `true` when the payment intent next_step returns `ready_to_confirm: true`, meaning the payment intent is ready to be confirmed.
     */
    confirm?: boolean;
}
