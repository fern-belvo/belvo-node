/**
 * This file was auto-generated by Fern from our API Definition.
 */

export const BelvoEnvironment = {
    Production: "https://api.belvo.com",
    Sandbox: "https://sandbox.belvo.com",
    Development: "https://development.belvo.com",
} as const;

export type BelvoEnvironment =
    | typeof BelvoEnvironment.Production
    | typeof BelvoEnvironment.Sandbox
    | typeof BelvoEnvironment.Development;
