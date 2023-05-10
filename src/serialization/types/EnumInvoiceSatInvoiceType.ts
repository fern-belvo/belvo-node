/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumInvoiceSatInvoiceType: core.serialization.Schema<
    serializers.EnumInvoiceSatInvoiceType.Raw,
    BelvoApi.EnumInvoiceSatInvoiceType
> = core.serialization.enum_(["Egreso", "Ingreso", "N\u00F3mina", "Pago", "Traslado"]);

export declare namespace EnumInvoiceSatInvoiceType {
    type Raw = "Egreso" | "Ingreso" | "N\u00F3mina" | "Pago" | "Traslado";
}
