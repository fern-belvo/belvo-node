/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const InvestmentsPortfolioInstrumentFees: core.serialization.ObjectSchema<
    serializers.InvestmentsPortfolioInstrumentFees.Raw,
    Belvo.InvestmentsPortfolioInstrumentFees
> = core.serialization.object({
    type: core.serialization.string(),
    value: core.serialization.number(),
});

export declare namespace InvestmentsPortfolioInstrumentFees {
    interface Raw {
        type: string;
        value: number;
    }
}
