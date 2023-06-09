/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * Recurring expense insights.
 *
 *
 * ℹ️ If no recurring expense insights are found, we return an empty array.
 *
 */
export interface RecurringExpenses {
    /** Belvo's unique identifier used to reference the current recurring expense. */
    id?: string;
    account?: Belvo.Account;
    /**
     * The name for the recurring expense.
     *
     * ℹ️ **Note**: This information is taken from the description section of a transaction and then normalized to provide you with an easy-to-read name. As such, sometimes the name will reflect the merchant the payment is made to (for example, Netflix.com), while for other recurring expenses, this could be something like "Monthly payment to John".
     *
     */
    name?: string;
    /** An array of minified transaction objects used to evaluate the recurring expense. If no transactions were found, we return an empty array. */
    transactions: (Belvo.RecurringExpenseSourceTransaction | undefined)[];
    frequency: Belvo.EnumRecurringExpenseFrequency;
    /** The average transaction amount of the recurring expense. */
    averageTransactionAmount: number;
    /** The median transaction amount of the recurring expense. */
    medianTransactionAmount: number;
    /**
     * Number of days since the last recurring expense occurred.
     *
     * Based on the frequency, you can infer how many days until the next charge will occur.
     *
     */
    daysSinceLastTransaction: number;
    category: Belvo.EnumRecurringExpenseCategory;
    paymentType?: Belvo.EnumRecurringExpensePaymentType;
}
