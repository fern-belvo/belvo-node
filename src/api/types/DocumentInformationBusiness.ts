/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Object containing detailed information about the fiscal document.
 */
export interface DocumentInformationBusiness {
    /** The name of the tax document. */
    name: string;
    /** The type of tax declaration form. For DIAN, this will be either `110` or `210`. */
    type: string;
    /** The institution-provided identifier for the tax declaration. */
    formNumber: string;
    /**
     * The year of this tax declaration.
     *
     */
    year?: number;
}
