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
 * response object for /cue/{cue_number}/commandFormat
 * @export
 * @interface CueCueNumberCommandFormatResponse
 */
export interface CueCueNumberCommandFormatResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberCommandFormatResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberCommandFormatResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberCommandFormatResponse
     */
    data?: object;
}

export function CueCueNumberCommandFormatResponseFromJSON(json: any): CueCueNumberCommandFormatResponse {
    return CueCueNumberCommandFormatResponseFromJSONTyped(json, false);
}

export function CueCueNumberCommandFormatResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberCommandFormatResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberCommandFormatResponseToJSON(value?: CueCueNumberCommandFormatResponse | null): any {
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

