/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as BelvoApi from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace TaxReturns {
    interface Options {
        environment?: environments.BelvoApiEnvironment | string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class TaxReturns {
    constructor(protected readonly options: TaxReturns.Options) {}

    /**
     * @throws {BelvoApi.UnauthorizedError}
     */
    public async listTaxReturns(
        request: BelvoApi.ListTaxReturnsRequest = {}
    ): Promise<BelvoApi.ListTaxReturnsResponse> {
        const {
            page,
            pageSize,
            omit,
            fields,
            link,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            id,
            idIn,
            ejercicio,
            ejercicioLt,
            ejercicioLte,
            ejercicioGt,
            ejercicioGte,
            ejercicioRange,
            tipoDeclaracion,
            tipoDeclaracionIn,
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

        if (link != null) {
            _queryParams.append("link", link);
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

        if (id != null) {
            _queryParams.append("id", id);
        }

        if (idIn != null) {
            _queryParams.append("id__in", idIn);
        }

        if (ejercicio != null) {
            _queryParams.append("ejercicio", ejercicio);
        }

        if (ejercicioLt != null) {
            _queryParams.append("ejercicio__lt", ejercicioLt);
        }

        if (ejercicioLte != null) {
            _queryParams.append("ejercicio__lte", ejercicioLte);
        }

        if (ejercicioGt != null) {
            _queryParams.append("ejercicio__gt", ejercicioGt);
        }

        if (ejercicioGte != null) {
            _queryParams.append("ejercicio__gte", ejercicioGte);
        }

        if (ejercicioRange != null) {
            _queryParams.append("ejercicio__range", ejercicioRange);
        }

        if (tipoDeclaracion != null) {
            _queryParams.append("tipo_declaracion", tipoDeclaracion);
        }

        if (tipoDeclaracionIn != null) {
            _queryParams.append("tipo_declaracion__in", tipoDeclaracionIn);
        }

        if (linkIn != null) {
            _queryParams.append("link__in", linkIn);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoApiEnvironment.Production, "api/tax-returns"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.10",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.ListTaxReturnsResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new BelvoApi.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
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

    /**
     * @throws {BelvoApi.BadRequestError}
     * @throws {BelvoApi.UnauthorizedError}
     * @throws {BelvoApi.RequestTimeoutError}
     * @throws {BelvoApi.InternalServerError}
     */
    public async retrieveTaxReturns(
        request: BelvoApi.RetrieveTaxReturnsRequest
    ): Promise<BelvoApi.RetrieveTaxReturnsResponseItem[]> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.BelvoApiEnvironment.Production, "api/tax-returns"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.10",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.RetrieveTaxReturnsRequestBody.jsonOrThrow(_body, {
                unrecognizedObjectKeys: "strip",
            }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.taxReturns.retrieveTaxReturns.Response.parseOrThrow(_response.body, {
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
                case 408:
                    throw new BelvoApi.RequestTimeoutError(
                        await serializers.RequestTimeoutError.parseOrThrow(_response.error.body, {
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

    /**
     * @throws {BelvoApi.UnauthorizedError}
     * @throws {BelvoApi.NotFoundError}
     */
    public async detailTaxReturn(
        id: string,
        request: BelvoApi.DetailTaxReturnRequest = {}
    ): Promise<BelvoApi.DetailTaxReturnResponse> {
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
                this.options.environment ?? environments.BelvoApiEnvironment.Production,
                `api/tax-returns/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.10",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.DetailTaxReturnResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new BelvoApi.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new BelvoApi.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
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

    /**
     * @throws {BelvoApi.UnauthorizedError}
     * @throws {BelvoApi.NotFoundError}
     */
    public async destroyTaxReturn(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoApiEnvironment.Production,
                `api/tax-returns/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.10",
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
                    throw new BelvoApi.UnauthorizedError(
                        await serializers.UnauthorizedError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new BelvoApi.NotFoundError(
                        await serializers.NotFoundError.parseOrThrow(_response.error.body, {
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
