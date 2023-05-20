/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const CategorizationBody: core.serialization.ObjectSchema<
    serializers.CategorizationBody.Raw,
    Belvo.CategorizationBody
> = core.serialization.object({
    transactionId: core.serialization.property("transaction_id", core.serialization.string()),
    accountHolderType: core.serialization.property(
        "account_holder_type",
        core.serialization.lazy(async () => (await import("..")).EnumCategorizationAccountHolderType)
    ),
    accountHolderId: core.serialization.property("account_holder_id", core.serialization.string()),
    accountId: core.serialization.property("account_id", core.serialization.string()),
    accountCategory: core.serialization.property(
        "account_category",
        core.serialization.lazy(async () => (await import("..")).EnumCategorizationAccountCategory)
    ),
    valueDate: core.serialization.property("value_date", core.serialization.string()),
    description: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("..")).EnumCategorizationTransactionType),
    amount: core.serialization.number(),
    currency: core.serialization.string(),
    institution: core.serialization.string(),
    mcc: core.serialization.number().optional(),
    category: core.serialization
        .lazy(async () => (await import("..")).EnumCategorizationTransactionCategory)
        .optional(),
    subcategory: core.serialization
        .lazy(async () => (await import("..")).EnumCategorizationTransactionSubcategory)
        .optional(),
    merchant: core.serialization.lazyObject(async () => (await import("..")).CategorizationMerchantData).optional(),
});

export declare namespace CategorizationBody {
    interface Raw {
        transaction_id: string;
        account_holder_type: serializers.EnumCategorizationAccountHolderType.Raw;
        account_holder_id: string;
        account_id: string;
        account_category: serializers.EnumCategorizationAccountCategory.Raw;
        value_date: string;
        description: string;
        type: serializers.EnumCategorizationTransactionType.Raw;
        amount: number;
        currency: string;
        institution: string;
        mcc?: number | null;
        category?: serializers.EnumCategorizationTransactionCategory.Raw | null;
        subcategory?: serializers.EnumCategorizationTransactionSubcategory.Raw | null;
        merchant?: serializers.CategorizationMerchantData.Raw | null;
    }
}
