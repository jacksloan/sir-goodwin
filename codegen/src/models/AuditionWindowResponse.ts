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
 * response object for /auditionWindow
 * @export
 * @interface AuditionWindowResponse
 */
export interface AuditionWindowResponse {
    /**
     * 
     * @type {string}
     * @memberof AuditionWindowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof AuditionWindowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof AuditionWindowResponse
     */
    data?: object;
}

export function AuditionWindowResponseFromJSON(json: any): AuditionWindowResponse {
    return AuditionWindowResponseFromJSONTyped(json, false);
}

export function AuditionWindowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditionWindowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function AuditionWindowResponseToJSON(value?: AuditionWindowResponse | null): any {
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

