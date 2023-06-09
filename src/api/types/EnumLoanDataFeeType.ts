/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of fee. We return one of the following values:
 *
 *   - `OPERATION_FEE`
 *   - `INSURANCE_FEE`
 *   - `OTHERS`
 *
 */
export type EnumLoanDataFeeType = "OPERATION_FEE" | "INSURANCE_FEE" | "OTHERS";

export const EnumLoanDataFeeType = {
    OperationFee: "OPERATION_FEE",
    InsuranceFee: "INSURANCE_FEE",
    Others: "OTHERS",
} as const;
