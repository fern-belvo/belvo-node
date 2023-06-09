/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Details regarding the individual's social security contributions.
 */
export interface EmploymentRecordSocialSecuritySummary {
    /**
     * Number of weeks the individual needed to take out of their pension.
     *
     */
    weeksRedeemed?: number;
    /**
     * Number of weeks the individual has paid back into their pension (*AFORE*), after having redeemed them previously.
     *
     */
    weeksReinstated?: number;
    /**
     * Number of weeks the individual has contributed to their social security, based on the number of weeks the individual has worked according to IMSS.
     *
     */
    weeksContributed?: number;
}
