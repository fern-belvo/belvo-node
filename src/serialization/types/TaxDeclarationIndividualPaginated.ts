/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxDeclarationIndividualPaginated: core.serialization.ObjectSchema<
    serializers.TaxDeclarationIndividualPaginated.Raw,
    Belvo.TaxDeclarationIndividualPaginated
> = core.serialization.object({
    count: core.serialization.number().optional(),
    next: core.serialization.string().optional(),
    previous: core.serialization.string().optional(),
    results: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).TaxDeclarationIndividual))
        .optional(),
});

export declare namespace TaxDeclarationIndividualPaginated {
    interface Raw {
        count?: number | null;
        next?: string | null;
        previous?: string | null;
        results?: serializers.TaxDeclarationIndividual.Raw[] | null;
    }
}
