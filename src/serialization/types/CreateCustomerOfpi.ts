/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const CreateCustomerOfpi: core.serialization.ObjectSchema<
    serializers.CreateCustomerOfpi.Raw,
    Belvo.CreateCustomerOfpi
> = core.serialization.object({
    customerType: core.serialization.property(
        "customer_type",
        core.serialization.lazy(async () => (await import("..")).EnumCustomerType)
    ),
    name: core.serialization.string(),
    country: core.serialization.lazy(async () => (await import("..")).EnumPaymentsCountry),
    email: core.serialization.string(),
    identifier: core.serialization.string(),
    identifierType: core.serialization.property(
        "identifier_type",
        core.serialization.lazy(async () => (await import("..")).EnumCustomerIdentifierTypeOfpi)
    ),
    address: core.serialization.string().optional(),
    phone: core.serialization.string().optional(),
});

export declare namespace CreateCustomerOfpi {
    interface Raw {
        customer_type: serializers.EnumCustomerType.Raw;
        name: string;
        country: serializers.EnumPaymentsCountry.Raw;
        email: string;
        identifier: string;
        identifier_type: serializers.EnumCustomerIdentifierTypeOfpi.Raw;
        address?: string | null;
        phone?: string | null;
    }
}
