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
 * @interface CueCueNumberSliceMarkersTimeMinusRequest
 */
export interface CueCueNumberSliceMarkersTimeMinusRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkersTimeMinusRequest
     */
    delta?: string;
}

export function CueCueNumberSliceMarkersTimeMinusRequestFromJSON(json: any): CueCueNumberSliceMarkersTimeMinusRequest {
    return CueCueNumberSliceMarkersTimeMinusRequestFromJSONTyped(json, false);
}

export function CueCueNumberSliceMarkersTimeMinusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliceMarkersTimeMinusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
    };
}

export function CueCueNumberSliceMarkersTimeMinusRequestToJSON(value?: CueCueNumberSliceMarkersTimeMinusRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'delta': value.delta,
    };
}

