/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvestmentsPortfolio: core.serialization.ObjectSchema<
    serializers.InvestmentsPortfolio.Raw,
    Belvo.InvestmentsPortfolio
> = core.serialization.object({
    id: core.serialization.string().optional(),
    name: core.serialization.string(),
    type: core.serialization.lazy(async () => (await import("..")).EnumInvestmentPortfolioType),
    balanceType: core.serialization.property("balance_type", core.serialization.string().optional()),
    balanceGross: core.serialization.property("balance_gross", core.serialization.number().optional()),
    balanceNet: core.serialization.property("balance_net", core.serialization.number().optional()),
    currency: core.serialization.string(),
    instruments: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("..")).InvestmentsPortfolioInstrument).optional())
        .optional(),
});

export declare namespace InvestmentsPortfolio {
    interface Raw {
        id?: string | null;
        name: string;
        type: serializers.EnumInvestmentPortfolioType.Raw;
        balance_type?: string | null;
        balance_gross?: number | null;
        balance_net?: number | null;
        currency: string;
        instruments?: (serializers.InvestmentsPortfolioInstrument.Raw | null | undefined)[] | null;
    }
}
