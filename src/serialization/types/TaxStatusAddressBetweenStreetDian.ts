/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxStatusAddressBetweenStreetDian: core.serialization.ObjectSchema<
    serializers.TaxStatusAddressBetweenStreetDian.Raw,
    Belvo.TaxStatusAddressBetweenStreetDian
> = core.serialization.object({
    streetOne: core.serialization.property("street_one", core.serialization.string().optional()),
    streetTwo: core.serialization.property("street_two", core.serialization.string().optional()),
});

export declare namespace TaxStatusAddressBetweenStreetDian {
    interface Raw {
        street_one?: string | null;
        street_two?: string | null;
    }
}
