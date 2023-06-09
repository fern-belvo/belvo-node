/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * This error occurs when you try to access Belvo's resource without the correct permissions.
 */
export interface AccessToResourceDenied {
    /**
     * A unique error code (`access_to_resource_denied`) that allows you to classify and handle the error programmatically.
     *
     * ℹ️ Check our DevPortal for more information on how to handle <a href="https://developers.belvo.com/docs/belvo-api-errors#403-access_to_resource_denied" target="_blank">403 access_to_resource_denied</a>.
     */
    code?: string;
    /**
     * A short description of the error.
     *
     * For `access_to_resource_denied` errors, the description is:
     *
     *   - `You don't have access to this resource.`.
     */
    message?: string;
    /** A 32-character unique ID of the request (matching a regex pattern of: `[a-f0-9]{32}`). Provide this ID when contacting the Belvo support team to accelerate investigations. */
    requestId?: string;
}
