/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

/**
 * Details regarding any employment changes of the individual.
 */
export interface EmploymentRecordEmploymentStatusUpdates {
    event?: Belvo.EnumEmploymentRecordStatusUpdateEvents;
    /**
     * The base salary of the individual, current as of the `update_date`.
     *
     */
    baseSalary?: number;
    /**
     * The date that the employment event occured, in `YYYY-MM-DD` format.
     *
     */
    updateDate?: string;
}
