/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details regarding the sender.
 *
 */
export interface InvoiceSenderDetailsDian {
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /**
     * Indicates if the sender is a business or an individual. Can be either:
     *
     *   - `Persona Jurídica`
     *   - `Persona Natural`
     *
     */
    taxPayerType?: string;
    /**
     * The sender's regimen type.
     *
     * For detailed information regarding DIAN's regimens, please see their [official PDF](https://www.dian.gov.co/impuestos/factura-electronica/Documents/Anexo_tecnico_factura_electronica_vr_1_7_2020.pdf).
     *
     */
    regimen?: string;
    /**
     * The sender's fiscal responsibilities.
     *
     * For detailed information regarding DIAN's tax schemes, please see their [official PDF](https://www.dian.gov.co/impuestos/factura-electronica/Documents/Anexo_tecnico_factura_electronica_vr_1_7_2020.pdf).
     *
     */
    taxScheme?: string;
    /**
     * The country where the sender pays their taxes.
     *
     */
    country?: string;
    /**
     * The sender's address.
     *
     */
    address?: string;
    /**
     * The sender's phone number.
     *
     */
    phoneNumber?: string;
    /**
     * The sender's email address.
     *
     */
    email?: string;
}
