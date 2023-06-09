/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export type PaymentIntentPseLastError =
    | Belvo.LastErrorInvalidCredentials
    | Belvo.LastErrorInvalidToken
    | Belvo.LastErrorLoginError
    | Belvo.LastErrorTwoFactor
    | Belvo.LastErrorPaymentError
    | Belvo.LastErrorSessionExpired;
