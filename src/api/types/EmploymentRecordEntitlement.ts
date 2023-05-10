/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as BelvoApi from "..";

/**
 * Details regarding the benefits the individual is entitled to.
 */
export interface EmploymentRecordEntitlement {
    /**
     * Indicated whether or not the individual is entitled to health insurance.
     *
     */
    entitledToHealthInsurance?: boolean;
    /**
     * Indicates whether or not the individual is entitled to company benefits.
     *
     */
    entitledToCompanyBenefits?: boolean;
    /**
     * Date until when the individual is covered by health insurance and/or company benefits. If `null` the employee is currently working and no end date is required.
     *
     */
    validUntil?: string;
    status?: BelvoApi.EnumEmploymentRecordStatus;
}
