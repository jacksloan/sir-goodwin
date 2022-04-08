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
 * @interface CueCueNumberLiveEffectSetRequest
 */
export interface CueCueNumberLiveEffectSetRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveEffectSetRequest
     */
    parameter?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberLiveEffectSetRequest
     */
    value?: string;
}

export function CueCueNumberLiveEffectSetRequestFromJSON(json: any): CueCueNumberLiveEffectSetRequest {
    return CueCueNumberLiveEffectSetRequestFromJSONTyped(json, false);
}

export function CueCueNumberLiveEffectSetRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberLiveEffectSetRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CueCueNumberLiveEffectSetRequestToJSON(value?: CueCueNumberLiveEffectSetRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'parameter': value.parameter,
        'value': value.value,
    };
}

