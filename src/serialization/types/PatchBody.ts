/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const PatchBody: core.serialization.ObjectSchema<serializers.PatchBody.Raw, Belvo.PatchBody> =
    core.serialization.object({
        session: core.serialization.string(),
        token: core.serialization.string().optional(),
        link: core.serialization.string(),
        saveData: core.serialization.property("save_data", core.serialization.boolean().optional()),
    });

export declare namespace PatchBody {
    interface Raw {
        session: string;
        token?: string | null;
        link: string;
        save_data?: boolean | null;
    }
}
