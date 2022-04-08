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
 * response object for /runningCues/uniqueIDs/shallow
 * @export
 * @interface RunningCuesUniqueIDsShallowResponse
 */
export interface RunningCuesUniqueIDsShallowResponse {
    /**
     * 
     * @type {string}
     * @memberof RunningCuesUniqueIDsShallowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof RunningCuesUniqueIDsShallowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof RunningCuesUniqueIDsShallowResponse
     */
    data?: object;
}

export function RunningCuesUniqueIDsShallowResponseFromJSON(json: any): RunningCuesUniqueIDsShallowResponse {
    return RunningCuesUniqueIDsShallowResponseFromJSONTyped(json, false);
}

export function RunningCuesUniqueIDsShallowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RunningCuesUniqueIDsShallowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function RunningCuesUniqueIDsShallowResponseToJSON(value?: RunningCuesUniqueIDsShallowResponse | null): any {
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

