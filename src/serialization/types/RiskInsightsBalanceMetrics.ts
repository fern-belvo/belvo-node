/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const RiskInsightsBalanceMetrics: core.serialization.ObjectSchema<
    serializers.RiskInsightsBalanceMetrics.Raw,
    Belvo.RiskInsightsBalanceMetrics
> = core.serialization.object({
    minBalance1W: core.serialization.property("min_balance_1w", core.serialization.number().optional()),
    minBalance1M: core.serialization.property("min_balance_1m", core.serialization.number().optional()),
    minBalance3M: core.serialization.property("min_balance_3m", core.serialization.number().optional()),
    maxBalance1W: core.serialization.property("max_balance_1w", core.serialization.number().optional()),
    maxBalance1M: core.serialization.property("max_balance_1m", core.serialization.number().optional()),
    maxBalance3M: core.serialization.property("max_balance_3m", core.serialization.number().optional()),
    closingBalance: core.serialization.property("closing_balance", core.serialization.number().optional()),
    daysBalanceBelow01W: core.serialization.property("days_balance_below_0_1w", core.serialization.number().optional()),
    daysBalanceBelow01M: core.serialization.property("days_balance_below_0_1m", core.serialization.number().optional()),
    daysBalanceBelow03M: core.serialization.property("days_balance_below_0_3m", core.serialization.number().optional()),
    daysBalanceBelowX1W: core.serialization.property("days_balance_below_x_1w", core.serialization.number().optional()),
    daysBalanceBelowX1M: core.serialization.property("days_balance_below_x_1m", core.serialization.number().optional()),
    daysBalanceBelowX3M: core.serialization.property("days_balance_below_x_3m", core.serialization.number().optional()),
    balanceThresholdX: core.serialization.property("balance_threshold_x", core.serialization.number()),
});

export declare namespace RiskInsightsBalanceMetrics {
    interface Raw {
        min_balance_1w?: number | null;
        min_balance_1m?: number | null;
        min_balance_3m?: number | null;
        max_balance_1w?: number | null;
        max_balance_1m?: number | null;
        max_balance_3m?: number | null;
        closing_balance?: number | null;
        days_balance_below_0_1w?: number | null;
        days_balance_below_0_1m?: number | null;
        days_balance_below_0_3m?: number | null;
        days_balance_below_x_1w?: number | null;
        days_balance_below_x_1m?: number | null;
        days_balance_below_x_3m?: number | null;
        balance_threshold_x: number;
    }
}
