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

export declare namespace Accounts {
    interface Options {
        environment?: environments.BelvoEnvironment | string;
        secretId: core.Supplier<string>;
        secretPassword: core.Supplier<string>;
    }
}

export class Accounts {
    constructor(protected readonly options: Accounts.Options) {}

    /**
     * Get a paginated list of all existing accounts in your Belvo account. By default, we return up to 100 results per page.
     * @throws {@link Belvo.UnauthorizedError}
     */
    public async listAccounts(request: Belvo.ListAccountsRequest = {}): Promise<Belvo.AccountsPaginatedResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            link,
            balanceAvailable,
            balanceAvailableLt,
            balanceAvailableLte,
            balanceAvailableGt,
            balanceAvailableGte,
            balanceAvailableRange,
            balanceCurrent,
            balanceCurrentLt,
            balanceCurrentLte,
            balanceCurrentGt,
            balanceCurrentGte,
            balanceCurrentRange,
            category,
            categoryIn,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            currency,
            currencyIn,
            id,
            idIn,
            institution,
            institutionIn,
            linkIn,
            name,
            nameIcontains,
            number: number_,
            numberIn,
            publicIdentificationName,
            publicIdentificationValue,
            type: type_,
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

        if (balanceAvailable != null) {
            _queryParams.append("balance__available", balanceAvailable);
        }

        if (balanceAvailableLt != null) {
            _queryParams.append("balance__available__lt", balanceAvailableLt);
        }

        if (balanceAvailableLte != null) {
            _queryParams.append("balance__available__lte", balanceAvailableLte);
        }

        if (balanceAvailableGt != null) {
            _queryParams.append("balance__available__gt", balanceAvailableGt);
        }

        if (balanceAvailableGte != null) {
            _queryParams.append("balance__available__gte", balanceAvailableGte);
        }

        if (balanceAvailableRange != null) {
            _queryParams.append("balance__available__range", balanceAvailableRange);
        }

        if (balanceCurrent != null) {
            _queryParams.append("balance__current", balanceCurrent);
        }

        if (balanceCurrentLt != null) {
            _queryParams.append("balance__current__lt", balanceCurrentLt);
        }

        if (balanceCurrentLte != null) {
            _queryParams.append("balance__current__lte", balanceCurrentLte);
        }

        if (balanceCurrentGt != null) {
            _queryParams.append("balance__current__gt", balanceCurrentGt);
        }

        if (balanceCurrentGte != null) {
            _queryParams.append("balance__current__gte", balanceCurrentGte);
        }

        if (balanceCurrentRange != null) {
            _queryParams.append("balance__current__range", balanceCurrentRange);
        }

        if (category != null) {
            _queryParams.append("category", category);
        }

        if (categoryIn != null) {
            _queryParams.append("category__in", categoryIn);
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

        if (name != null) {
            _queryParams.append("name", name);
        }

        if (nameIcontains != null) {
            _queryParams.append("name__icontains", nameIcontains);
        }

        if (number_ != null) {
            _queryParams.append("number", number_);
        }

        if (numberIn != null) {
            _queryParams.append("number__in", numberIn);
        }

        if (publicIdentificationName != null) {
            _queryParams.append("public_identification_name", publicIdentificationName);
        }

        if (publicIdentificationValue != null) {
            _queryParams.append("public_identification_value", publicIdentificationValue);
        }

        if (type_ != null) {
            _queryParams.append("type", type_);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/accounts"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.30",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AccountsPaginatedResponse.parseOrThrow(_response.body, {
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
     * Retrieve accounts from an existing link.
     *
     *   > 🚧 Scheduled field deprecation
     *   >
     *   > Please note that we will soon be deprecating the following fields in our `loan_data` object:
     *   > - `cutting_date`
     *   > - `cutting_day`
     *   > - `credit_limit`: replaced by the `principal` field.
     *   > - `interest_rate`: replaced by the `interest_rates` object.
     *   > - `last_payment_date`
     *   > - `last_period_balance`: replaced by the `outstanding_balance ` field.
     *   > - `limit_day`
     *   > - `limit_date`: replaced by the `payment_day ` field.
     *   > - `no_interest_payment`
     *   > - `payment_due_day`
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveAccounts(request: Belvo.RetrieveAccountsRequest): Promise<Belvo.Account[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/accounts"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.30",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.StandardRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.accounts.retrieveAccounts.Response.parseOrThrow(_response.body, {
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
     * Used to resume an Account retrieve session that was paused because an MFA token was required by the institution.
     *
     *   > 🚧 Scheduled field deprecation
     *   >
     *   > Please note that we will soon be deprecating the following fields in our `loan_data` object:
     *   > - `cutting_date`
     *   > - `cutting_day`
     *   > - `credit_limit`: replaced by the `principal` field.
     *   > - `interest_rate`: replaced by the `interest_rates` object.
     *   > - `last_payment_date`
     *   > - `last_period_balance`: replaced by the `outstanding_balance ` field.
     *   > - `limit_day`
     *   > - `limit_date`: replaced by the `payment_day ` field.
     *   > - `no_interest_payment`
     *   > - `payment_due_day`
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async patchAccounts(request: Belvo.PatchAccountsRequest): Promise<Belvo.Account[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/accounts"),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.30",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.PatchBody.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.accounts.patchAccounts.Response.parseOrThrow(_response.body, {
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
     * Get the details of a specific account.
     *
     *   > 🚧 Scheduled field deprecation
     *   >
     *   > Please note that we will soon be deprecating the following fields in our `loan_data` object:
     *   > - `cutting_date`
     *   > - `cutting_day`
     *   > - `credit_limit`: replaced by the `principal` field.
     *   > - `interest_rate`: replaced by the `interest_rates` object.
     *   > - `last_payment_date`
     *   > - `last_period_balance`: replaced by the `outstanding_balance ` field.
     *   > - `limit_day`
     *   > - `limit_date`: replaced by the `payment_day ` field.
     *   > - `no_interest_payment`
     *   > - `payment_due_day`
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async detailAccount(id: string, request: Belvo.DetailAccountRequest = {}): Promise<Belvo.Account> {
        const { omit, fields } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/accounts/${id}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.30",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Account.parseOrThrow(_response.body, {
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
     * Delete a specific account and all associated transactions, as well as owners, from your Belvo account.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async destroyAccount(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, `api/accounts/${id}`),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.30",
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
