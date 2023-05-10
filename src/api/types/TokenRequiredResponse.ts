/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * MFA Token Required
 */
export interface TokenRequiredResponse {
    /**
     * A unique error code (`token_required`) that allows you to classify and handle the error programmatically.
     *
     * ℹ️ Check our DevPortal for more information on how to handle <a href="https://developers.belvo.com/docs/belvo-api-errors#428-token_required" target="_blank">428 token_required errors</a>.
     */
    code?: string;
    /**
     * A short description of the error.
     *
     * For `token_required` errors, the description is:
     *
     *   - `A MFA token is required by the institution to login`.
     */
    message?: string;
    /** A 32-character unique ID of the request (matching a regex pattern of: `[a-f0-9]{32}`). Provide this ID when contacting the Belvo support team to accelerate investigations. */
    requestId?: string;
    /** A 32-character unique ID of the login session (matching a regex pattern of: `[a-f0-9]{32}`). */
    session?: string;
    /** Session duration time in seconds. */
    expiry?: number;
    /** Unique identifier created by Belvo, used to reference the current Link. */
    link?: string;
    tokenGenerationData?: Belvo.TokenRequiredResponseTokenGenerationData;
}
