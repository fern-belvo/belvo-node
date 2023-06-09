/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface CreateBankAccountPse {
    /** Information regarding the business bank account holder. */
    holder: Belvo.HolderBusinessPse;
    /** Information about the payment service provider, required in order to establish a connection and process requests. For PSE, the value must be `payments_way`. */
    providers: Belvo.ProvidersPse;
    /**
     * The bank account number of the payment beneficiary.
     *
     */
    number: string;
    /**
     * Optional and customizable object where you can provide any additional key-value pairs for your internal purposes. For example, an internal reference number for the payment intent.
     *
     * ⚠️ **Note**: You can only provide up to 50 keys (keys can have up to 50 characters each and each value can be up to 500 characters). We do not support nested objects, only ASCII values.
     */
    metadata?: Record<string, unknown>;
}
