/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as BelvoApi from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace PaymentLinks {
    interface Options {
        environment: string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class PaymentLinks {
    constructor(protected readonly options: PaymentLinks.Options) {}

    public async listPaymentLinks(
        request: BelvoApi.ListPaymentLinksRequest = {}
    ): Promise<BelvoApi.PaymentLinkPaginatedResponse> {
        const {
            page,
            pageSize,
            createdAt,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            status,
            ordering,
            search,
        } = request;
        const _queryParams = new URLSearchParams();
        if (page != null) {
            _queryParams.append("page", page.toString());
        }

        if (pageSize != null) {
            _queryParams.append("page_size", pageSize.toString());
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

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (ordering != null) {
            _queryParams.append("ordering", ordering);
        }

        if (search != null) {
            _queryParams.append("search", search);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "payments/payment-links"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PaymentLinkPaginatedResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.BelvoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async createPaymentlink(
        request: BelvoApi.CreatePaymentlinkRequest
    ): Promise<BelvoApi.CreatePaymentlinkResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "payments/payment-links"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            body: await serializers.CreatePaymentlinkRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.CreatePaymentlinkResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.BelvoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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

    public async detailCreatePaymentlink(accessToken: string): Promise<BelvoApi.DetailCreatePaymentlinkResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `payments/payment-links/${accessToken}`),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.DetailCreatePaymentlinkResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            throw new errors.BelvoApiError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
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
