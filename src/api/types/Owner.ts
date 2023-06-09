/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Belvo from "..";

export interface Owner {
    /** Belvo's unique identifier used to reference the current owner. */
    id?: string;
    /** Belvo's unique ID for the current Link. */
    link?: string;
    /** The institution's internal identifier for the owner. */
    internalIdentification?: string;
    /** The ISO-8601 timestamp when the data point was collected. */
    collectedAt?: string;
    /** The ISO-8601 timestamp of when the data point was last updated in Belvo's database. */
    createdAt?: string;
    /** The full name of the owner, as provided by the bank. */
    displayName?: string;
    /** The account owner's registered email address. */
    email?: string;
    /** The account owner's registered phone number. */
    phoneNumber?: string;
    /** The accounts owners registered address. */
    address?: string;
    documentId?: Belvo.OwnerDocumentId;
    /**
     * *This field has been deprecated.*
     *
     * *The first name of the account owner.*
     *
     */
    firstName?: string;
    /**
     * *This field has been deprecated.*
     *
     * *The last name of the account owner.*
     *
     */
    lastName?: string;
    /**
     * *This field has been deprecated.*
     *
     * *The second last name of the account owner.*
     *
     */
    secondLastName?: string;
}
