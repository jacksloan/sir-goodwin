/* tslint:disable */
/* eslint-disable */
/**
 * QLab OSC Rest Proxy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * response object for /cue/{number}/children/uniqueIDs
 * @export
 * @interface CueNumberChildrenUniqueIDsResponse
 */
export interface CueNumberChildrenUniqueIDsResponse {
    /**
     * 
     * @type {string}
     * @memberof CueNumberChildrenUniqueIDsResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueNumberChildrenUniqueIDsResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueNumberChildrenUniqueIDsResponse
     */
    data?: object;
}

export function CueNumberChildrenUniqueIDsResponseFromJSON(json: any): CueNumberChildrenUniqueIDsResponse {
    return CueNumberChildrenUniqueIDsResponseFromJSONTyped(json, false);
}

export function CueNumberChildrenUniqueIDsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueNumberChildrenUniqueIDsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueNumberChildrenUniqueIDsResponseToJSON(value?: CueNumberChildrenUniqueIDsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'address': value.address,
        'data': value.data,
    };
}

