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
 * 
 * @export
 * @interface CueCueNumberCueTargetNumberRequest
 */
export interface CueCueNumberCueTargetNumberRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberCueTargetNumberRequest
     */
    string?: string;
}

export function CueCueNumberCueTargetNumberRequestFromJSON(json: any): CueCueNumberCueTargetNumberRequest {
    return CueCueNumberCueTargetNumberRequestFromJSONTyped(json, false);
}

export function CueCueNumberCueTargetNumberRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberCueTargetNumberRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'string': !exists(json, 'string') ? undefined : json['string'],
    };
}

export function CueCueNumberCueTargetNumberRequestToJSON(value?: CueCueNumberCueTargetNumberRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'string': value.string,
    };
}

