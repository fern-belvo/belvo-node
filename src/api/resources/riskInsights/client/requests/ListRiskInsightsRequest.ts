/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ListRiskInsightsRequest {
    /**
     * A page number within the paginated result set.
     */
    page?: number;
    /**
     * Indicates how many results to return per page. By default we return 100 results per page.
     *
     * ℹ️ The minimum number of results returned per page is 1 and the maximum is 1000. If you enter a value greater than 1000, our API will default to the maximum value (1000).
     *
     */
    pageSize?: number;
    /**
     * Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    omit?: string;
    /**
     * Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    fields?: string;
    /**
     * The `link.id` you want to filter by.
     *
     * ℹ️ We highly recommend adding the `link.id` filter in order to improve your performance.
     *
     */
    link?: string;
    /**
     * Return information for this `risk-insight.id`.
     */
    id?: string;
    /**
     * Return information for these `risk-insight.id`s.
     */
    idIn?: string;
    /**
     * Return information for these `link.id`s.
     */
    linkIn?: string;
}
