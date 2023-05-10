/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as BelvoApi from "../../api";
import * as core from "../../core";

export const InvestmentsPortfolioInstrumentPublicId: core.serialization.ObjectSchema<
    serializers.InvestmentsPortfolioInstrumentPublicId.Raw,
    BelvoApi.InvestmentsPortfolioInstrumentPublicId
> = core.serialization.object({
    type: core.serialization.string(),
    value: core.serialization.string(),
});

export declare namespace InvestmentsPortfolioInstrumentPublicId {
    interface Raw {
        type: string;
        value: string;
    }
}
