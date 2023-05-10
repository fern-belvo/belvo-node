/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The current status of the link. For more information, see our [Link](https://developers.belvo.com/docs/links-and-institutions#links) article in the devportal.
 * We return one of the following values:
 *   - `valid`
 *   - `invalid`
 *   - `unconfirmed`
 *   - `token_required`
 *
 */
export type EnumLinkStatus = "valid" | "invalid" | "unconfirmed" | "token_required";

export const EnumLinkStatus = {
    Valid: "valid",
    Invalid: "invalid",
    Unconfirmed: "unconfirmed",
    TokenRequired: "token_required",
} as const;
