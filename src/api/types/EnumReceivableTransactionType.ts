/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of transaction. For example, whether the transaction was a `VISA_DEBIT` or a `MASTERCARD_CREDIT`.
 *
 * We return one of the following values:
 *
 *   - `VISA_CREDIT`
 *   - `VISA_DEBIT`
 *   - `MASTERCARD_CREDIT`
 *   - `MASTERCARD_DEBIT`
 *   - `ELO_CREDIT`
 *   - `ELO_DEBIT`
 *   - `null`
 *
 */
export type EnumReceivableTransactionType = string;
