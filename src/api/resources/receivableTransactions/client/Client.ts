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

export declare namespace ReceivableTransactions {
    interface Options {
        environment?: environments.BelvoEnvironment | string;
        secretId: core.Supplier<string>;
        secretPassword: core.Supplier<string>;
    }
}

export class ReceivableTransactions {
    constructor(protected readonly options: ReceivableTransactions.Options) {}

    /**
     * Get a paginated list of all the existing receivable transactions in your Belvo account. We return up to 100 results per page.
     * @throws {@link Belvo.UnauthorizedError}
     */
    public async listReceivableTransactions(
        request: Belvo.ListReceivableTransactionsRequest = {}
    ): Promise<Belvo.ReceivablesTransactionsPaginatedResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            link,
            account,
            accountIn,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
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
            url: urlJoin(
                this.options.environment ?? environments.BelvoEnvironment.Production,
                "receivables/transactions"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.25",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ReceivablesTransactionsPaginatedResponse.parseOrThrow(_response.body, {
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
     * Retrieve all receivable transactions for an existing link.
     * @throws {@link Belvo.BadRequestError}
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.PreconditionError}
     * @throws {@link Belvo.InternalServerError}
     */
    public async retrieveReceivableTransactions(
        request: Belvo.RetrieveReceivableTransactionsRequest
    ): Promise<Belvo.ReceivablesTransaction> {
        const { omit, fields, body: _body } = request;
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
                "receivables/transactions"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.25",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ReceivableTransactionRequest.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ReceivablesTransaction.parseOrThrow(_response.body, {
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
     * Get the details of a specific receivable transaction.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async detailReceivableTransaction(
        id: string,
        request: Belvo.DetailReceivableTransactionRequest = {}
    ): Promise<Belvo.ReceivablesTransaction> {
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
                `receivables/transactions/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.25",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ReceivablesTransaction.parseOrThrow(_response.body, {
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
     * Delete a specific receivable transaction from your Belvo account.
     * @throws {@link Belvo.UnauthorizedError}
     * @throws {@link Belvo.NotFoundError}
     */
    public async destroyReceivableTransaction(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoEnvironment.Production,
                `receivables/transactions/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.25",
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
