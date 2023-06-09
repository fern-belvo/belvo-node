/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const DocumentIdIndividual: core.serialization.ObjectSchema<
    serializers.DocumentIdIndividual.Raw,
    Belvo.DocumentIdIndividual
> = core.serialization.object({
    documentType: core.serialization.property("document_type", core.serialization.string()),
    documentNumber: core.serialization.property("document_number", core.serialization.string()),
});

export declare namespace DocumentIdIndividual {
    interface Raw {
        document_type: string;
        document_number: string;
    }
}
