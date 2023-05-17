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

export declare namespace Transactions {
    interface Options {
        environment?: environments.BelvoEnvironment | string;
        secretId: core.Supplier<string>;
        secretPassword: core.Supplier<string>;
    }
}

export class Transactions {
    constructor(protected readonly options: Transactions.Options) {}

    /**
     * Get a paginated list of all existing transactions in your Belvo account. By default, we return up to 100 results per page.
     * @throws {@link Belvo.UnauthorizedError}
     */
    public async listTransactions(
        request: Belvo.ListTransactionsRequest
    ): Promise<Belvo.TransactionsPaginatedResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            link,
            account,
            accountBalanceAvailable,
            accountBalanceAvailableLt,
            accountBalanceAvailableLte,
            accountBalanceAvailableRange,
            accountBalanceCurrent,
            accountBalanceCurrentGt,
            accountBalanceCurrentGte,
            accountBalanceCurrentLt,
            accountBalanceCurrentLte,
            accountBalanceCurrentRange,
            accountIn,
            accountType,
            accountTypeIn,
            accountingDate,
            accountingDateGt,
            accountingDateGte,
            accountingDateLt,
            accountingDateLte,
            accountingDateRange,
            amount,
            amountGt,
            amountGte,
            amountLt,
            amountLte,
            amountRange,
            collectedAt,
            collectedAtGt,
            collectedAtGte,
            collectedAtLt,
            collectedAtLte,
            collectedAtRange,
            createdAt,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            creditCardDataBillNameIn,
            currency,
            currencyIn,
            reference,
            referenceIn,
            status,
            statusIn,
            type: type_,
            typeIn,
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

        _queryParams.append("link", link);
        if (account != null) {
            _queryParams.append("account", account);
        }

        if (accountBalanceAvailable != null) {
            _queryParams.append("account__balance__available", accountBalanceAvailable);
        }

        if (accountBalanceAvailableLt != null) {
            _queryParams.append("account__balance__available__lt", accountBalanceAvailableLt);
        }

        if (accountBalanceAvailableLte != null) {
            _queryParams.append("account__balance__available__lte", accountBalanceAvailableLte);
        }

        if (accountBalanceAvailableRange != null) {
            _queryParams.append("account__balance__available__range", accountBalanceAvailableRange);
        }

        if (accountBalanceCurrent != null) {
            _queryParams.append("account__balance__current", accountBalanceCurrent);
        }

        if (accountBalanceCurrentGt != null) {
            _queryParams.append("account__balance__current__gt", accountBalanceCurrentGt);
        }

        if (accountBalanceCurrentGte != null) {
            _queryParams.append("account__balance__current__gte", accountBalanceCurrentGte);
        }

        if (accountBalanceCurrentLt != null) {
            _queryParams.append("account__balance__current__lt", accountBalanceCurrentLt);
        }

        if (accountBalanceCurrentLte != null) {
            _queryParams.append("account__balance__current__lte", accountBalanceCurrentLte);
        }

        if (accountBalanceCurrentRange != null) {
            _queryParams.append("account__balance__current__range", accountBalanceCurrentRange);
        }

        if (accountIn != null) {
            _queryParams.append("account__in", accountIn);
        }

        if (accountType != null) {
            _queryParams.append("account_type", accountType);
        }

        if (accountTypeIn != null) {
            _queryParams.append("account_type__in", accountTypeIn);
        }

        if (accountingDate != null) {
            _queryParams.append("accounting_date", accountingDate);
        }

        if (accountingDateGt != null) {
            _queryParams.append("accounting_date__gt", accountingDateGt);
        }

        if (accountingDateGte != null) {
            _queryParams.append("accounting_date__gte", accountingDateGte);
        }

        if (accountingDateLt != null) {
            _queryParams.append("accounting_date__lt", accountingDateLt);
        }

        if (accountingDateLte != null) {
            _queryParams.append("accounting_date__lte", accountingDateLte);
        }

        if (accountingDateRange != null) {
            _queryParams.append("accounting_date__range", accountingDateRange);
        }

        if (amount != null) {
            _queryParams.append("amount", amount);
        }

        if (amountGt != null) {
            _queryParams.append("amount__gt", amountGt);
        }

        if (amountGte != null) {
            _queryParams.append("amount__gte", amountGte);
        }

        if (amountLt != null) {
            _queryParams.append("amount__lt", amountLt);
        }

        if (amountLte != null) {
            _queryParams.append("amount__lte", amountLte);
        }

        if (amountRange != null) {
            _queryParams.append("amount__range", amountRange);
        }

        if (collectedAt != null) {
            _queryParams.append("collected_at", collectedAt);
        }

        if (collectedAtGt != null) {
            _queryParams.append("collected_at__gt", collectedAtGt);
        }

        if (collectedAtGte != null) {
            _queryParams.append("collected_at__gte", collectedAtGte);
        }

        if (collectedAtLt != null) {
            _queryParams.append("collected_at__lt", collectedAtLt);
        }

        if (collectedAtLte != null) {
            _queryParams.append("collected_at__lte", collectedAtLte);
        }

        if (collectedAtRange != null) {
            _queryParams.append("collected_at__range", collectedAtRange);
        }

        if (createdAt != null) {
            _queryParams.append("created_at", createdAt);
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

        if (creditCardDataBillNameIn != null) {
            _queryParams.append("credit_card_data__bill_name__in", creditCardDataBillNameIn);
        }

        if (currency != null) {
            _queryParams.append("currency", currency);
        }

        if (currencyIn != null) {
            _queryParams.append("currency__in", currencyIn);
        }

        if (reference != null) {
            _queryParams.append("reference", reference);
        }

        if (referenceIn != null) {
            _queryParams.append("reference__in", referenceIn);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (statusIn != null) {
            _queryParams.append("status__in", statusIn);
        }

        if (type_ != null) {
            _queryParams.append("type", type_);
        }

        if (typeIn != null) {
            _queryParams.append("type__in", typeIn);
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
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/transactions"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.TransactionsPaginatedResponse.parseOrThrow(_response.body, {
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
     * Retrieve transactions for one or more accounts from a specific link.
     * <div style="background-color:#f4f6f8; border-left: 6px solid #0663F9;padding: 12px;margin-left: 25px; border-radius: 4px; margin-right: 25px"> <strong>Info: </strong> When retrieving transactions, it is important to understand that the available transaction data ranges depend on each institution. <br><br>
     * If you try to access older information than what we can access, we will return all the data we can read within that date range. For example, if you request transactions for the last year and we can only access the last six months, we will return the information corresponding to these six months of data. </div>
     *
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveTransactions(request: Belvo.RetrieveTransactionsRequest): Promise<Belvo.Transaction[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/transactions"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.TransactionsRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.transactions.retrieveTransactions.Response.parseOrThrow(_response.body, {
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
     * Retrieve transactions for one or more accounts from a specific link.
     * <div style="background-color:#f4f6f8; border-left: 6px solid #0663F9;padding: 12px;margin-left: 25px; border-radius: 4px; margin-right: 25px"> <strong>Info: </strong> When retrieving transactions, it is important to understand that the available transaction data ranges depend on each institution. <br><br>
     * If you try to access older information than what we can access, we will return all the data we can read within that date range. For example, if you request transactions for the last year and we can only access the last six months, we will return the information corresponding to these six months of data. </div>
     *
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveTransactionsAsync(
        request: Belvo.RetrieveTransactionsAsyncRequest
    ): Promise<Belvo.AsynchronousAccepted202> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/transactions"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
                "X-Belvo-Request-Mode": "async",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.TransactionsRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.AsynchronousAccepted202.parseOrThrow(_response.body, {
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
     * Used to resume a Transaction retrieve session that was paused because an MFA token was required by the institution.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.RequestTimeoutError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async patchTransactions(request: Belvo.PatchTransactionsRequest): Promise<Belvo.Transaction[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoEnvironment.Production, "api/transactions"),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.PatchBody.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.transactions.patchTransactions.Response.parseOrThrow(_response.body, {
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
     * Get the details of a specific transaction.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async detailTransaction(
        id: string,
        request: Belvo.DetailTransactionRequest = {}
    ): Promise<Belvo.Transaction> {
        const { omit, fields } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoEnvironment.Production,
                `api/transactions/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Transaction.parseOrThrow(_response.body, {
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
     * Delete a specific transaction from your Belvo account.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async destroyTransaction(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoEnvironment.Production,
                `api/transactions/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.33",
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
