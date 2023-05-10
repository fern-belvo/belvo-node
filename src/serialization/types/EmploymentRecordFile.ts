/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const EmploymentRecordFile: core.serialization.ObjectSchema<
    serializers.EmploymentRecordFile.Raw,
    Belvo.EmploymentRecordFile
> = core.serialization.object({
    type: core.serialization.string().optional(),
    value: core.serialization.string().optional(),
});

export declare namespace EmploymentRecordFile {
    interface Raw {
        type?: string | null;
        value?: string | null;
    }
}
