/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const TaxStatusSat: core.serialization.ObjectSchema<serializers.TaxStatusSat.Raw, Belvo.TaxStatusSat> =
    core.serialization.object({
        id: core.serialization.string(),
        link: core.serialization.string(),
        collectedAt: core.serialization.property("collected_at", core.serialization.string().optional()),
        createdAt: core.serialization.property("created_at", core.serialization.string()),
        placeAndDateOfIssuance: core.serialization.property(
            "place_and_date_of_issuance",
            core.serialization.string().optional()
        ),
        officialName: core.serialization.property("official_name", core.serialization.string().optional()),
        idCif: core.serialization.property("id_cif", core.serialization.string().optional()),
        taxPayerInformation: core.serialization.property(
            "tax_payer_information",
            core.serialization.lazyObject(async () => (await import("..")).TaxStatusTaxPayerInformationSat)
        ),
        address: core.serialization.lazyObject(async () => (await import("..")).TaxStatusAddressSat),
        economicActivity: core.serialization.property(
            "economic_activity",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("..")).TaxStatusEconomicActivitySat))
                .optional()
        ),
        regimes: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).TaxStatusRegimensSat))
            .optional(),
        obligations: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).TaxStatusObligationsSat))
            .optional(),
        digitalStamp: core.serialization.property("digital_stamp", core.serialization.string().optional()),
        digitalStampChain: core.serialization.property("digital_stamp_chain", core.serialization.string().optional()),
        pdf: core.serialization.string().optional(),
    });

export declare namespace TaxStatusSat {
    interface Raw {
        id: string;
        link: string;
        collected_at?: string | null;
        created_at: string;
        place_and_date_of_issuance?: string | null;
        official_name?: string | null;
        id_cif?: string | null;
        tax_payer_information: serializers.TaxStatusTaxPayerInformationSat.Raw;
        address: serializers.TaxStatusAddressSat.Raw;
        economic_activity?: serializers.TaxStatusEconomicActivitySat.Raw[] | null;
        regimes?: serializers.TaxStatusRegimensSat.Raw[] | null;
        obligations?: serializers.TaxStatusObligationsSat.Raw[] | null;
        digital_stamp?: string | null;
        digital_stamp_chain?: string | null;
        pdf?: string | null;
    }
}
