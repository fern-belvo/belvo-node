/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaxComplianceStatusRequest {
    /**
     * Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    omit?: string;
    /**
     * Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    fields?: string;
    /** The fiscal `link.id` to use. */
    link: string;
    /** When set to `true`, you will receive the PDF in binary format in the response. */
    attachPdf?: boolean;
    /**
     * Indicates whether or not to persist the data in Belvo. By default, this is set to `true` and we return a 201 Created response.
     * When set to `false`, the data won't be persisted and we return a 200 OK response.
     */
    saveData?: boolean;
}
