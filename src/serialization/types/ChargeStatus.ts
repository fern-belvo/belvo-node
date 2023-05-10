/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as Belvo from "../../api";
import * as core from "../../core";

export const ChargeStatus: core.serialization.Schema<serializers.ChargeStatus.Raw, Belvo.ChargeStatus> =
    core.serialization.enum_(["PENDING", "SUCCEEDED", "FAILED"]);

export declare namespace ChargeStatus {
    type Raw = "PENDING" | "SUCCEEDED" | "FAILED";
}
