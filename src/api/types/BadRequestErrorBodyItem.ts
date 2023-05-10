/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

export type BadRequestErrorBodyItem =
    | BelvoApi.InvalidAccessMode
    | BelvoApi.TooManySessionsError
    | BelvoApi.LoginError
    | BelvoApi.SessionExpiredError
    | BelvoApi.ValidationError
    | BelvoApi.InstitutionDownError
    | BelvoApi.InstitutionUnavailableError
    | BelvoApi.InstitutionInactiveError
    | BelvoApi.UnsupportedOperationError
    | BelvoApi.InvalidLinkError
    | BelvoApi.UnconfirmedLinkError;
