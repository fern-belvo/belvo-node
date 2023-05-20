/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Aggregated metrics calculated based on the link's credit card accounts.
 */
export interface RiskInsightsCreditCardMetrics {
    /**
     * Number of credit cards accounts associated to the link.
     *
     */
    numAccounts: number;
    /**
     * Sum total of all credit cards' limits.
     *
     */
    sumCreditLimit?: number;
    /**
     * Sum total of all credit used.
     *
     */
    sumCreditUsed?: number;
}
