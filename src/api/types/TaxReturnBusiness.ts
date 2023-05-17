/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaxReturnBusiness {
    /** Unique identifier created by Belvo used to reference the current Tax Return. */
    id?: string;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt?: string;
    /** General information regarding the tax return (year, RFC, return type, person/company name, and so on). */
    informacionGeneral?: Record<string, unknown>;
    /** Additional data regarding the tax return. */
    datosAdicionales?: Record<string, unknown>;
    /** Detailed information about the legal entity's yearly profit and loss. */
    estadoResultados?: Record<string, unknown>;
    /** Details regarding balance sheet of the legal entity. */
    estadoPosicionFinancieraBalance?: Record<string, unknown>;
    /** Details regarding the accounting reconciliation. */
    conciliacionEntreResultadoContableFiscal?: Record<string, unknown>;
    /** Details regarding the legal entity's deductions. */
    deduccionesAutorizadas?: Record<string, unknown>;
    /** Details regarding key numbers at the end of the fiscal exercise. */
    cifrasCierreEjercicio?: Record<string, unknown>;
    /** Details regarding the final tax return. */
    determinacionDelImpuestoSobreLaRenta?: Record<string, unknown>;
    /** Details regarding distributed dividends. */
    dividendosOUtilidadesDistribuidos?: Record<string, unknown>;
    /** Details of the tax payment. */
    detallePagoR1IsrPersonasMorales?: Record<string, unknown>;
    /** Tax return PDF as a binary. */
    pdf?: string;
    /** The acknowledgement receipt from the fiscal institution confirming that they received the tax return. */
    receiptPdf?: string;
}
