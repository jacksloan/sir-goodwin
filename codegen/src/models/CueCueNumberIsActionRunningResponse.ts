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
 * response object for /cue/{cue_number}/isActionRunning
 * @export
 * @interface CueCueNumberIsActionRunningResponse
 */
export interface CueCueNumberIsActionRunningResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberIsActionRunningResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberIsActionRunningResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberIsActionRunningResponse
     */
    data?: object;
}

export function CueCueNumberIsActionRunningResponseFromJSON(json: any): CueCueNumberIsActionRunningResponse {
    return CueCueNumberIsActionRunningResponseFromJSONTyped(json, false);
}

export function CueCueNumberIsActionRunningResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberIsActionRunningResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberIsActionRunningResponseToJSON(value?: CueCueNumberIsActionRunningResponse | null): any {
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

