/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface InvoiceWithIdSat {
    /** Belvo's unique identifier used to reference the current invoice. */
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
    /** The status of the invoice. Can be either *Vigente* (valid) or *Cancelado* (cancelled). */
    status?: string;
    invoiceType?: Belvo.EnumInvoiceSatInvoiceType;
    type?: Belvo.EnumInvoiceType;
    /** The fiscal ID of the invoice sender */
    senderId?: string;
    /** The name of the invoice sender. */
    senderName?: string;
    /**
     * Indicates whether or not the sender is on SAT's tax fraud list for having submitted incorrect data, having outstanding payments, or having conducted business that is in violation of the fiscal institution's regulations.<br><br>
     * SAT updates the tax fraud list every three months. <br><br>
     * For more information regarding the reason's a taxpayer can be put on the tax fraud list, please see [Article 69](http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69.html) and [Article 69-B](http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html) of Mexico's Código Fiscal de la Federación. <br><br>
     * Possible statuses are:
     * - `INVESTIGATING` <br> The fiscal institution has identified irregularities and open an investigation regarding the taxpayer. <br> - `DISMISSED` <br> The fiscal institution has investigated the taxpayer and declared them innocent. <br> - `CONFIRMED` <br> The fiscal institution has confirmed that the taxpayer is guilty. <br> - `OVERTURNED` <br> The fiscal institution has reassessed a previously confirmed taxpayer and, based on new evidence, has taken the taxpayer off the tax fraud list. <br> - `NO_TAX_FRAUD_STATUS` <br> The receiver or sender is not found in the list (in other words, they are complying with the fiscal institution's regulations).
     */
    senderTaxFraudStatus?: string;
    /** The fiscal ID of the invoice receiver. */
    receiverId?: string;
    /** The name of the invoice receiver. */
    receiverName?: string;
    /**
     * Indicates whether or not the receiver is on SAT's tax fraud list for having submitted incorrect data, having outstanding payments, or having conducted business that is in violation of the fiscal institution's regulations.<br><br>
     * SAT updates the tax fraud list every three months. <br><br>
     * For more information regarding the reason's a taxpayer can be put on the tax fraud list, please see [Article 69](http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69.html) and [Article 69-B](http://omawww.sat.gob.mx/cifras_sat/Paginas/datos/vinculo.html?page=ListCompleta69B.html) of Mexico's Código Fiscal de la Federación. <br><br>
     * Possible statuses are:
     * - `INVESTIGATING` <br> The fiscal institution has identified irregularities and open an investigation regarding the taxpayer. <br> - `DISMISSED` <br> The fiscal institution has investigated the taxpayer and declared them innocent. <br> - `CONFIRMED` <br> The fiscal institution has confirmed that the taxpayer is guilty. <br> - `OVERTURNED` <br> The fiscal institution has reassessed a previously confirmed taxpayer and, based on new evidence, has taken the taxpayer off the tax fraud list. <br> - `NO_TAX_FRAUD_STATUS` <br> The receiver or sender is not found in the list (in other words, they are complying with the fiscal institution's regulations).
     */
    receiverTaxFraudStatus?: string;
    /** If the invoice is cancelled, this field indicates the status of the cancellation. */
    cancelationStatus?: string;
    /**
     * The date of the invoice cancelation.
     *
     */
    cancelationUpdateDate?: string;
    /**
     * The date of the fiscal certification.
     *
     */
    certificationDate?: string;
    /**
     * The fiscal ID of the certification provider.
     *
     */
    certificationAuthority?: string;
    /**
     * The payment type code used for this invoice, as defined by the country legal entity.
     *
     * - 🇲🇽 Mexico [SAT catalog reference article](https://developers.belvo.com/docs/sat-catalogs#payment-type)
     *
     */
    paymentType?: string;
    /**
     * *This field has been deprecated.*
     *
     */
    paymentTypeDescription?: string;
    paymentMethod?: Belvo.EnumInvoiceSatPaymentMethod;
    /**
     * *This field has been deprecated.*
     *
     * *The description of the payment method used for this invoice.*
     *
     */
    paymentMethodDescription?: string;
    /**
     * The invoice's usage code, as defined by the legal entity of the country.
     *
     * - 🇲🇽 Mexico [SAT catalog reference article](https://developers.belvo.com/docs/sat-catalogs#usage)
     *
     */
    usage?: string;
    /**
     * The CFDI version of the invoice.
     *
     */
    version?: string;
    /**
     * The postcode of where the invoice was issued.
     *
     */
    placeOfIssue?: string;
    /**
     * A list of descriptions for each item (purchased product or service provided) in the invoice.
     *
     */
    invoiceDetails: Belvo.InvoiceDetailSat[];
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
     * A list detailing all the invoice payments.
     *
     */
    payments: Belvo.InvoicesPaymentsSat[];
    payroll?: Belvo.InvoicesPayrollSat;
    /**
     * The internal control number that the taxpayer assigns to the invoice.
     *
     */
    folio?: string;
    /**
     * XML of the invoice document.
     *
     */
    xml?: string;
    warnings?: Belvo.InvoiceWarningsSat;
    /**
     * This field has been deprecated. Please use `sender_tax_fraud_status` instead.
     *
     */
    senderBlacklistStatus?: string;
    /**
     * This field has been deprecated. Please use `receiver_tax_fraud_status` instead.
     *
     */
    receiverBlacklistStatus?: string;
}
