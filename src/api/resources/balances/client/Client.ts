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

export declare namespace Balances {
    interface Options {
        environment?: environments.BelvoEnvironment | string;
        secretId: core.Supplier<string>;
        secretPassword: core.Supplier<string>;
    }
}

export class Balances {
    constructor(protected readonly options: Balances.Options) {}

    /**
     * Get a paginated list of all existing balances in your Belvo account. By default, we return up to 100 results per page.
     * @throws {@link Belvo.UnauthorizedError}
     */
    public async listBalances(request: Belvo.ListBalancesRequest = {}): Promise<Belvo.BalancesPaginatedResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            link,
            account,
            accountIn,
            accountType,
            accountTypeIn,
            balance,
            balanceLt,
            balanceLte,
            balanceGt,
            balanceGte,
            balanceRange,
            currency,
            currencyIn,
            id,
            idIn,
            institution,
            institutionIn,
            linkIn,
            valueDate,
            valueDateGt,
            valueDateGte,
            valueDateLt,
            valueDateLte,
            valueDateRange,
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

        if (link != null) {
            _queryParams.append("link", link);
        }

        if (account != null) {
            _queryParams.append("account", account);
        }

        if (accountIn != null) {
            _queryParams.append("account__in", accountIn);
        }

        if (accountType != null) {
            _queryParams.append("account__type", accountType);
        }

        if (accountTypeIn != null) {
            _queryParams.append("account__type__in", accountTypeIn);
        }

        if (balance != null) {
            _queryParams.append("balance", balance);
        }

        if (balanceLt != null) {
            _queryParams.append("balance__lt", balanceLt);
        }

        if (balanceLte != null) {
            _queryParams.append("balance__lte", balanceLte);
        }

        if (balanceGt != null) {
            _queryParams.append("balance__gt", balanceGt);
        }

        if (balanceGte != null) {
            _queryParams.append("balance__gte", balanceGte);
        }

        if (balanceRange != null) {
            _queryParams.append("balance__range", balanceRange);
        }

        if (currency != null) {
            _queryParams.append("currency", currency);
        }

        if (currencyIn != null) {
            _queryParams.append("currency__in", currencyIn);
        }

        if (id != null) {
            _queryParams.append("id", id);
        }

        if (idIn != null) {
            _queryParams.append("id__in", idIn);
        }

        if (institution != null) {
            _queryParams.append("institution", institution);
        }

        if (institutionIn != null) {
            _queryParams.append("institution__in", institutionIn);
        }

        if (linkIn != null) {
            _queryParams.append("link__in", linkIn);
        }

        if (valueDate != null) {
            _queryParams.append("value_date", valueDate);
        }

        if (valueDateGt != null) {
            _queryParams.append("value_date__gt", valueDateGt);
        }

        if (valueDateGte != null) {
            _queryParams.append("value_date__gte", valueDateGte);
        }

        if (valueDateLt != null) {
            _queryParams.append("value_date__lt", valueDateLt);
        }

        if (valueDateLte != null) {
            _queryParams.append("value_date__lte", valueDateLte);
        }

        if (valueDateRange != null) {
            _queryParams.append("value_date__range", valueDateRange);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/balances"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.BalancesPaginatedResponse.parseOrThrow(_response.body, {
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
     * Retrieve balances from one or more accounts for a specific link within a specified date range.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveBalances(request: Belvo.BalancesRequest): Promise<Belvo.Balance[]> {
        const { omit, fields, ..._body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/balances"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.BalancesRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.balances.retrieveBalances.Response.parseOrThrow(_response.body, {
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
     * Used to resume a Balance retrieve session that was paused because an MFA token was required by the institution.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async patchBalances(request: Belvo.PatchBalancesRequest): Promise<Belvo.Balance[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/balances"),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.PatchBody.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.balances.patchBalances.Response.parseOrThrow(_response.body, {
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
     * Get the details of a specific balance.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async detailBalance(id: string, request: Belvo.DetailBalanceRequest = {}): Promise<Belvo.Balance> {
        const { omit, fields } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/balances/${id}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.29",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Balance.parseOrThrow(_response.body, {
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
     * Delete a specific balance from your Belvo account.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async destroyBalance(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/balances/${id}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.29",
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
