/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TransactionBankAccountBodyPse: core.serialization.ObjectSchema<
    serializers.TransactionBankAccountBodyPse.Raw,
    Belvo.TransactionBankAccountBodyPse
> = core.serialization.object({
    bankAccount: core.serialization.property("bank_account", core.serialization.string().optional()),
});

export declare namespace TransactionBankAccountBodyPse {
    interface Raw {
        bank_account?: string | null;
    }
}
