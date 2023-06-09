/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface InvoiceDian {
    /** Belvo's unique identifier for the current invoice. */
    id?: string;
    /** The `link.id` the invoice belongs to. */
    link?: string;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt?: string;
    /** The fiscal institution's unique ID for the invoice. */
    invoiceIdentification?: string;
    /** The date of the invoice. */
    invoiceDate?: string;
    /**
     * The status of the invoice. Can be one of:
     *
     *   - *Vigente* (valid)
     *   - *Cancelado* (cancelled)
     *   - *Aprobado* (approved)
     */
    status?: string;
    /**
     * Indicates when the invoice is set to expire.
     *
     * For example: If the invoice is paid in installments, this field indicates the date when the installment is to be paid.
     *
     */
    expirationDate?: string;
    invoiceType?: Belvo.EnumInvoiceDianInvoiceType;
    type?: Belvo.EnumInvoiceType;
    /** The fiscal ID of the invoice sender. */
    senderId?: string;
    /** The name of the invoice sender. */
    senderName?: string;
    senderDetails?: Belvo.InvoiceSenderDetailsDian;
    /**
     * Indicates whether or not the sender is on a tax fraud list for having submitted incorrect data, having outstanding payments, or having conducted business that is in violation of the fiscal institution's regulations.
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     */
    senderTaxFraudStatus?: string;
    /** The fiscal ID of the invoice receiver. */
    receiverId?: string;
    /** The name of the invoice receiver. */
    receiverName?: string;
    receiverDetails?: Belvo.InvoicesReceiverDetailsDian;
    /** **Note**: This field is not applicable for DIAN Colombia and will return `null`. */
    receiverTaxFraudStatus?: string;
    /** **Note**: This field is not applicable for DIAN Colombia and will return `null`. */
    cancelationStatus?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    cancelationUpdateDate?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    certificationDate?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    certificationAuthority?: string;
    /**
     * The payment type code used for this invoice, as defined by the country legal entity.
     *
     * For detailed information regarding DIAN's payment types, please see their [official PDF](https://www.dian.gov.co/impuestos/factura-electronica/Documents/Anexo_tecnico_factura_electronica_vr_1_7_2020.pdf).
     *
     */
    paymentType?: string;
    /**
     * The description of the payment method used for this invoice.
     *
     */
    paymentTypeDescription?: string;
    paymentMethod?: Belvo.EnumInvoiceDianPaymentMethod;
    /**
     * The description of the payment method used for this invoice.
     *
     */
    paymentMethodDescription?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    usage?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    version?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    placeOfIssue?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    invoiceDetails: Belvo.InvoiceDetailDian[];
    /**
     * The currency of the invoice. For example:
     *
     *  - 🇧🇷 BRL (Brazilian Real)
     *  - 🇨🇴 COP (Colombian Peso)
     *  - 🇲🇽 MXN (Mexican Peso)
     *  - 🇺🇸 USD (United States Dollar)
     *
     */
    currency?: string;
    /**
     * The pretax amount of this invoice (sum of each item's `pre_tax_amount`).
     *
     */
    subtotalAmount?: number;
    /**
     * The exchange rate used in this invoice for the currency.
     *
     */
    exchangeRate?: number;
    /**
     * The amount of tax for this invoice (sum of each item's `tax_amount`).
     *
     */
    taxAmount?: number;
    /**
     * The total amount discounted in this invoice.
     *
     */
    discountAmount?: number;
    /** The total amount of the invoice (`subtotal_amount` + `tax_amount` - `discount_amount`) */
    totalAmount?: number;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    payments: Belvo.InvoicesPaymentsDian[];
    payroll?: Belvo.InvoicesPayrollDian;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    folio?: string;
    /**
     * **Note**: This field is not applicable for DIAN Colombia and will return `null`.
     *
     */
    xml?: string;
    warnings?: Belvo.InvoiceWarningsDian;
}
