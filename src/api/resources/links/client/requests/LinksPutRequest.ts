/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface LinksPutRequest {
    /**
     * Omit certain fields from being returned in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    omit?: string;
    /**
     * Return only the specified fields in the response. For more information, see our [Filtering responses](https://developers.belvo.com/docs/searching-and-filtering) DevPortal article.
     */
    fields?: string;
    /** The end-user's password used to log in to the institution. */
    password: string;
    /**
     * The end-user's second password used to log in to the institution.
     *
     * ℹ️ This is only required by some institutions. To know which institutions require a second password, get the [details](https://developers.belvo.com/reference/detailinstitution) for the institution and check the `form_fields` array in the response.
     *
     */
    password2?: string;
    /**
     * The MFA token required by the bank to log in.
     *
     */
    token?: string;
    /**
     * Type of document to be used as a username.
     *
     *   Some banking institutions accept different documents to be used as the `username` to login. For example, the *Cédula de Ciudadanía*, *Cédula de Extranjería*, *Pasaporte'*, and so on.
     *
     *   For banks that require a document to log in, you **must** provide the `username_type` parameter to specify which document is used when creating the link.
     *
     *   ℹ️ To know which institutions require the `username_type` parameter, get the [details](https://developers.belvo.com/reference/detailinstitution) for the institution and check the `form_fields` array in the response.
     *
     *   For a list of standards codes, see the table below.
     *
     * | Code | Description |
     * |-----------|-------|
     * | `001` | Cédula de Ciudadanía |
     * | `002` | Cédula de Extranjería |
     * | `003` | Pasaporte |
     * | `004` | Tarjeta de Identidad |
     * | `005` | Registro Civil |
     * | `006` | Número Identificación Personal |
     * | `020` | NIT |
     * | `021` | NIT Persona Natural |
     * | `022` | NIT Persona Extranjera |
     * | `023` | NIT Persona Jurídica |
     * | `024` | NIT Menores |
     * | `025` | NIT Desasociado |
     * | `030` | Trj. Seguro Social Extranjero |
     * | `031` | Sociedad Extranjera sin NIT en Colombia |
     * | `032` | Fideicomiso |
     * | `033` | RIF Venezuela |
     * | `034` | CIF |
     * | `035` | Número de Identidad |
     * | `036` | RTN |
     * | `037` | Cédula de Identidad |
     * | `038` | DIMEX |
     * | `039` | CED |
     * | `040` | PAS |
     * | `041` | Documento Único de Identidad |
     * | `042` | NIT Salvadoreño |
     * | `100` | Agência e conta |
     * | `101` | Código do operador |
     * | `102` | Cartão de crédito |
     * | `103` | CPF |
     *
     */
    usernameType?: string;
    /**
     * For certain fiscal institutions, it is possible to log in using a certificate and a private key, which enables a faster connection to the institution.
     *
     * Belvo supports a base64 encoded `certificate`. If the `certificate` parameter is used, you *must* also provide the `private_key` parameter.
     *
     */
    certificate?: string;
    /**
     * For certain fiscal institutions, it is possible to log in using a certificate and a private key, which enables a faster connection to the institution.
     *
     * Belvo supports a base64 encoded `private_key`. If the `private_key` parameter is used, you *must* also provide the `certificate` parameter.
     *
     */
    privateKey?: string;
}
