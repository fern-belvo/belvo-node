/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Information about the error you ran into in the previous step of the payment intent, if applicable. This error can occur when something unexpected happened in the `pse_display_token_required` next step.
 */
export interface LastErrorTwoFactor {
    /** A unique error code (`login_two_factor_error`) that allows you to classify and handle the error programmatically. */
    errorCode: string;
    /** A short description of the error. */
    errorMessage: string;
}
