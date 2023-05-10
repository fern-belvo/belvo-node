/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as BelvoApi from "../../..";
import URLSearchParams from "@ungap/url-search-params";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Links {
    interface Options {
        environment: string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class Links {
    constructor(protected readonly options: Links.Options) {}

    public async listLinks(request: BelvoApi.ListLinksRequest = {}): Promise<BelvoApi.PaginatedResponseLink> {
        const {
            page,
            pageSize,
            omit,
            fields,
            accessMode,
            createdAt,
            createdAtGt,
            createdAtGte,
            createdAtLt,
            createdAtLte,
            createdAtRange,
            createdByNotIn,
            externalId,
            externalIdIn,
            id,
            idIn,
            institution,
            institutionIn,
            institutionUserId,
            institutionUserIdIn,
            refreshRate,
            status,
            statusIn,
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

        if (accessMode != null) {
            _queryParams.append("access_mode", accessMode);
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

        if (createdByNotIn != null) {
            _queryParams.append("created_by__not_in", createdByNotIn);
        }

        if (externalId != null) {
            _queryParams.append("external_id", externalId);
        }

        if (externalIdIn != null) {
            _queryParams.append("external_id__in", externalIdIn);
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

        if (institutionUserId != null) {
            _queryParams.append("institution_user_id", institutionUserId);
        }

        if (institutionUserIdIn != null) {
            _queryParams.append("institution_user_id__in", institutionUserIdIn);
        }

        if (refreshRate != null) {
            _queryParams.append("refresh_rate", refreshRate);
        }

        if (status != null) {
            _queryParams.append("status", status);
        }

        if (statusIn != null) {
            _queryParams.append("status__in", statusIn);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "api/links"),
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
            return await serializers.PaginatedResponseLink.parseOrThrow(_response.body, {
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

    public async registerLink(request: BelvoApi.RegisterLinkRequest): Promise<BelvoApi.Link> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "api/links"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.LinksRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Link.parseOrThrow(_response.body, {
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

    public async patchLinks(request: BelvoApi.PatchLinksRequest): Promise<BelvoApi.Link> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "api/links"),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.PatchBodyWithoutSaveData.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Link.parseOrThrow(_response.body, {
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

    public async detailLink(id: string, request: BelvoApi.DetailLinkRequest = {}): Promise<BelvoApi.Link> {
        const { omit, fields } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `api/links/${id}`),
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
            return await serializers.Link.parseOrThrow(_response.body, {
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

    public async updateLink(id: string, request: BelvoApi.UpdateLinkRequest): Promise<BelvoApi.Link> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `api/links/${id}`),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.LinksPutRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Link.parseOrThrow(_response.body, {
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

    public async changeLinkAccessMode(
        id: string,
        request: BelvoApi.ChangeLinkAccessModeRequest
    ): Promise<BelvoApi.Link> {
        const { omit, fields, body: _body } = request;
        const _queryParams = new URLSearchParams();
        if (omit != null) {
            _queryParams.append("omit", omit);
        }

        if (fields != null) {
            _queryParams.append("fields", fields);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `api/links/${id}`),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.1",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.ChangeAccessMode.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.Link.parseOrThrow(_response.body, {
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

    public async destroyLink(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, `api/links/${id}`),
            method: "DELETE",
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
            return;
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
