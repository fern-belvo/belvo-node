/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "../../../..";

export interface RetrieveTaxReturnsRequest {
    /**
     * Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    omit?: string;
    /**
     * Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    fields?: string;
    body: Belvo.RetrieveTaxReturnsRequestBody;
}
