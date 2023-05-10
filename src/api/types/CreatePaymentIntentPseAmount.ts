/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Amount to be paid by your customer. For PSE, you can only send whole numbers. For example: `350000`.
 *
 * **Note:** You can send through this value either as a string or an integer. Regardless of the type you choose to send the `amount` as, Belvo returns a string with two decimal points, separated by a period ( `.`). For example, `350000.00`.
 *
 */
export type CreatePaymentIntentPseAmount = string | number;
