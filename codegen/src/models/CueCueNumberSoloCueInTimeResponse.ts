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
 * response object for /cue/{cue_number}/soloCueInTime
 * @export
 * @interface CueCueNumberSoloCueInTimeResponse
 */
export interface CueCueNumberSoloCueInTimeResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSoloCueInTimeResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSoloCueInTimeResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberSoloCueInTimeResponse
     */
    data?: object;
}

export function CueCueNumberSoloCueInTimeResponseFromJSON(json: any): CueCueNumberSoloCueInTimeResponse {
    return CueCueNumberSoloCueInTimeResponseFromJSONTyped(json, false);
}

export function CueCueNumberSoloCueInTimeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSoloCueInTimeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberSoloCueInTimeResponseToJSON(value?: CueCueNumberSoloCueInTimeResponse | null): any {
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

