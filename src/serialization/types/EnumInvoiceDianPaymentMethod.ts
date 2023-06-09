/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumInvoiceDianPaymentMethod: core.serialization.Schema<
    serializers.EnumInvoiceDianPaymentMethod.Raw,
    Belvo.EnumInvoiceDianPaymentMethod
> = core.serialization.string();

export declare namespace EnumInvoiceDianPaymentMethod {
    type Raw = string;
}
