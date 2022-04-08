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
 * @interface CueCueNumberSliceMarkersTimePlusRequest
 */
export interface CueCueNumberSliceMarkersTimePlusRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberSliceMarkersTimePlusRequest
     */
    delta?: string;
}

export function CueCueNumberSliceMarkersTimePlusRequestFromJSON(json: any): CueCueNumberSliceMarkersTimePlusRequest {
    return CueCueNumberSliceMarkersTimePlusRequestFromJSONTyped(json, false);
}

export function CueCueNumberSliceMarkersTimePlusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberSliceMarkersTimePlusRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'delta': !exists(json, 'delta') ? undefined : json['delta'],
    };
}

export function CueCueNumberSliceMarkersTimePlusRequestToJSON(value?: CueCueNumberSliceMarkersTimePlusRequest | null): any {
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

