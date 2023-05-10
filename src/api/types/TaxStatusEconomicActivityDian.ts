/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaxStatusEconomicActivityDian {
    /**
     * The economic activity code, according to the fiscal institution.
     *
     * For detailed information regarding DIAN's economic activities, please see their [official PDF](https://www.dian.gov.co/impuestos/factura-electronica/Documents/Anexo_tecnico_factura_electronica_vr_1_7_2020.pdf).
     *
     */
    economicActivity?: string;
    /** The start date of the economic activity. */
    initialDate?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    endDate?: string;
    /** The order of the economic activity. */
    order?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    percentage?: string;
}
