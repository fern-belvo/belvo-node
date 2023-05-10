/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The name of the category to which this transaction belongs.
 *
 * > **Get transaction categorization**
 * With [Transaction categorization](https://developers.belvo.com/docs/banking#categorizing-transactions), we clean and categorize transactions for you, turning raw data into actionable insights. To enable this feature, just [reach out](https://belvo.com/contact/?utm_source=documentation) to us, and we'll get right to it.
 *
 * We return one of the following enum values:
 *
 *   - `Bills & Utilities`
 *   - `Credits & Loans`
 *   - `Deposits`
 *   - `Fees & Charges`
 *   - `Food & Groceries`
 *   - `Home & Life`
 *   - `Income & Payments`
 *   - `Insurance`
 *   - `Investments & Savings`
 *   - `Online Platforms & Leisure`
 *   - `Personal Shopping`
 *   - `Taxes`
 *   - `Transfers`
 *   - `Transport & Travel`
 *   - `Unknown`*
 *   - `Withdrawal & ATM`
 *   - `null`
 *
 *
 *   \* For clients not using our Transaction Categorization product, we return `null` instead.
 *
 */
export type EnumTransactionCategory = string | undefined;
