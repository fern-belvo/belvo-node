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

export declare namespace EmploymentRecords {
    interface Options {
        environment?: environments.BelvoApiEnvironment | string;
        credentials: core.Supplier<core.BasicAuth>;
    }
}

export class EmploymentRecords {
    constructor(protected readonly options: EmploymentRecords.Options) {}

    public async listEmploymentRecords(
        request: BelvoApi.ListEmploymentRecordsRequest = {}
    ): Promise<BelvoApi.EmploymentRecordsPaginatedResponse> {
        const { page, pageSize, omit, fields } = request;
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

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoApiEnvironment.Production,
                "api/employment-records"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.EmploymentRecordsPaginatedResponse.parseOrThrow(_response.body, {
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

    public async retrieveEmploymentRecordDetails(
        request: BelvoApi.RetrieveEmploymentRecordDetailsRequest
    ): Promise<BelvoApi.EmploymentRecord[]> {
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
                this.options.environment ?? environments.BelvoApiEnvironment.Production,
                "api/employment-records"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            body: await serializers.EmploymentRecordRequest.jsonOrThrow(_body, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.employmentRecords.retrieveEmploymentRecordDetails.Response.parseOrThrow(
                _response.body,
                {
                    unrecognizedObjectKeys: "passthrough",
                    allowUnrecognizedUnionMembers: true,
                    allowUnrecognizedEnumValues: true,
                }
            );
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

    public async detailEmploymentRecord(
        id: string,
        request: BelvoApi.DetailEmploymentRecordRequest = {}
    ): Promise<BelvoApi.EmploymentRecord> {
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
                `api/employment-records/${id}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.3",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.EmploymentRecord.parseOrThrow(_response.body, {
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

    public async destroyEmploymentRecord(id: string): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.BelvoApiEnvironment.Production,
                `api/employment-records/${id}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/belvo",
                "X-Fern-SDK-Version": "0.0.3",
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
