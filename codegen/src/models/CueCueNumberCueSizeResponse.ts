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
 * response object for /cue/{cue_number}/cueSize
 * @export
 * @interface CueCueNumberCueSizeResponse
 */
export interface CueCueNumberCueSizeResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberCueSizeResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberCueSizeResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberCueSizeResponse
     */
    data?: object;
}

export function CueCueNumberCueSizeResponseFromJSON(json: any): CueCueNumberCueSizeResponse {
    return CueCueNumberCueSizeResponseFromJSONTyped(json, false);
}

export function CueCueNumberCueSizeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberCueSizeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberCueSizeResponseToJSON(value?: CueCueNumberCueSizeResponse | null): any {
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

