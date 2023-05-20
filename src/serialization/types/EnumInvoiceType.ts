/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EnumInvoiceType: core.serialization.Schema<serializers.EnumInvoiceType.Raw, Belvo.EnumInvoiceType> =
    core.serialization.string();

export declare namespace EnumInvoiceType {
    type Raw = string;
}
