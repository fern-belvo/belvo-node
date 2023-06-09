/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A JSON object containing a session UUID and a MFA token
 */
export interface PatchBodyWithoutSaveData {
    /** The session you want to resume. You need to use the `session` value that is provided in the 428 Token Required response that you receive after you make your POST request. */
    session: string;
    /** The MFA token generated by the institution and required to continue a session. */
    token?: string;
    /** The `link.id` you want to resume. Must be the same `link.id` as the one you receive in the 428 Token Required response that contains the `session` ID. */
    link: string;
}
