/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

/**
 * Object detailing what payment method information you need to display.
 */
export interface DisplayPaymentMethodInformationContentPse {
    /**
     * Array of bank account objects.
     *
     * **Note**: If there are no customer accounts saved in the Belvo database, we return an empty array.
     */
    customerBankAccounts?: BelvoApi.PaymentMethodInfoCustomerBankAccountsPse[];
    /** An array of institution objects. */
    institutions?: BelvoApi.PaymentInstitution[];
}
