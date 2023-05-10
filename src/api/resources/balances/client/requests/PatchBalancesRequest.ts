/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "../../../..";

export interface PatchBalancesRequest {
    omit?: string;
    fields?: string;
    /**
     * A JSON object containing a session UUID and a MFA token
     */
    body: BelvoApi.PatchBody;
}
