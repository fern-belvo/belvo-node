/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BelvoApi from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Categorization {
    interface Options {
        environment?: environments.BelvoApiEnvironment | string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class Categorization {
    constructor(protected readonly options: Categorization.Options) {}

    /**
     * @throws {BelvoApi.BadRequestError}
     * @throws {BelvoApi.UnauthorizedError}
     * @throws {BelvoApi.ForbiddenError}
     * @throws {BelvoApi.InternalServerError}
     */
    public async categorizeTransactions(request: BelvoApi.CategorizationRequest): Promise<BelvoApi.Categorization> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoApiEnvironment.Production, "api/categorization"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.5",
            },
            contentType: "application/json",
            body: await serializers.CategorizationRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Categorization.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new BelvoApi.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new BelvoApi.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new BelvoApi.ForbiddenError(
                        await serializers.ForbiddenError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new BelvoApi.InternalServerError(
                        await serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.BelvoApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoApiError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoApiTimeoutError();
            case "unknown":
                throw new errors.BelvoApiError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        const credentials = await core.Supplier.get(this.options.credentials);
        if (credentials != null) {
            return core.BasicAuth.toAuthorizationHeader(await core.Supplier.get(credentials));
        }

        return undefined;
    }
}
