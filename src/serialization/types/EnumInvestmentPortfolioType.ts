/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const EnumInvestmentPortfolioType: core.serialization.Schema<
    serializers.EnumInvestmentPortfolioType.Raw,
    BelvoApi.EnumInvestmentPortfolioType
> = core.serialization.enum_(["FIXED_INCOME", "OTHER", "PENSION", "VARIABLE_INCOME"]);

export declare namespace EnumInvestmentPortfolioType {
    type Raw = "FIXED_INCOME" | "OTHER" | "PENSION" | "VARIABLE_INCOME";
}
