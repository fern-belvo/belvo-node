/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Belvo from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Owners {
    interface Options {
        environment?: environments.BelvoEnvironment | string;
        secretId: core.Supplier<string>;
        secretPassword: core.Supplier<string>;
    }
}

export class Owners {
    constructor(protected readonly options: Owners.Options) {}

    /**
     * Get a paginated list of all existing owners in your Belvo account. We return up to 100 results per page.
     * @throws {@link Belvo.UnauthorizedError}
     */
    public async listOwners(request: Belvo.ListOwnersRequest = {}): Promise<Belvo.OwnersPaginatedResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            displayNameIcontains,
            email,
            id,
            idIn,
            link,
            linkIn,
        } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
        }

        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        if (createdAtGt != null) {
            _queryParams.append("created_at__gt", createdAtGt);
        }

        if (createdAtGte != null) {
            _queryParams.append("created_at__gte", createdAtGte);
        }

        if (createdAtLt != null) {
            _queryParams.append("created_at__lt", createdAtLt);
        }

        if (createdAtLte != null) {
            _queryParams.append("created_at__lte", createdAtLte);
        }

        if (createdAtRange != null) {
            _queryParams.append("created_at__range", createdAtRange);
        }

        if (displayNameIcontains != null) {
            _queryParams.append("display_name__icontains", displayNameIcontains);
        }

        if (email != null) {
            _queryParams.append("email", email);
        }

        if (id != null) {
            _queryParams.append("id", id);
        }

        if (idIn != null) {
            _queryParams.append("id__in", idIn);
        }

        if (link != null) {
            _queryParams.append("link", link);
        }

        if (linkIn != null) {
            _queryParams.append("link__in", linkIn);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/owners"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.34",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.OwnersPaginatedResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Belvo.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BelvoError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoTimeoutError();
            case "unknown":
                throw new errors.BelvoError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve owner information from a specific link.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveOwners(request: Belvo.RetrieveOwnersRequest): Promise<Belvo.Owner[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/owners"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.34",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.StandardRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.owners.retrieveOwners.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Belvo.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Belvo.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Belvo.RequestTimeoutError(
                        await serializers.RequestTimeoutError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 428:
                    throw new Belvo.PreconditionError(
                        await serializers.PreconditionError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Belvo.InternalServerError(
                        await serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BelvoError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoTimeoutError();
            case "unknown":
                throw new errors.BelvoError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Used to resume an Owner retrieve session that was paused because an MFA token was required by the institution.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async patchOwners(request: Belvo.PatchOwnersRequest): Promise<Belvo.Owner[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/owners"),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.34",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.PatchBody.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.owners.patchOwners.Response.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Belvo.BadRequestError(
                        await serializers.BadRequestError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 401:
                    throw new Belvo.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 408:
                    throw new Belvo.RequestTimeoutError(
                        await serializers.RequestTimeoutError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 428:
                    throw new Belvo.PreconditionError(
                        await serializers.PreconditionError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 500:
                    throw new Belvo.InternalServerError(
                        await serializers.InternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BelvoError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoTimeoutError();
            case "unknown":
                throw new errors.BelvoError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get the details of a specific owner.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async detailOwner(id: string, request: Belvo.DetailOwnerRequest = {}): Promise<Belvo.Owner> {
        const { omit, fields } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/owners/${id}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.34",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Owner.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
                skipValidation: true,
                breadcrumbsPrefix: ["response"],
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Belvo.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Belvo.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BelvoError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoTimeoutError();
            case "unknown":
                throw new errors.BelvoError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete a specific owner from your Belvo account.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async destroyOwner(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/owners/${id}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.34",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Belvo.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                case 404:
                    throw new Belvo.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            skipValidation: true,
                            breadcrumbsPrefix: ["response"],
                        })
                    );
                default:
                    throw new errors.BelvoError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.BelvoError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.BelvoTimeoutError();
            case "unknown":
                throw new errors.BelvoError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader() {
        return core.BasicAuth.toAuthorizationHeader({
            username: await core.Supplier.get(this.options.secretId),
            password: await core.Supplier.get(this.options.secretPassword),
        });
    }
}
