/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const BeneficiaryBankAccountOfpiDetails: core.serialization.Schema<
    serializers.BeneficiaryBankAccountOfpiDetails.Raw,
    BelvoApi.BeneficiaryBankAccountOfpiDetails
> = core.serialization.undiscriminatedUnion([
    core.serialization.lazyObject(async () => (await import("..")).BankAccountDetailsOpenFinance),
    core.serialization.lazyObject(async () => (await import("..")).BankAccountDetailsOpenFinancePix),
]);

export declare namespace BeneficiaryBankAccountOfpiDetails {
    type Raw = serializers.BankAccountDetailsOpenFinance.Raw | serializers.BankAccountDetailsOpenFinancePix.Raw;
}
