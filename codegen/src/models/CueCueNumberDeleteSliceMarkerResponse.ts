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
 * response object for /cue/{cue_number}/deleteSliceMarker
 * @export
 * @interface CueCueNumberDeleteSliceMarkerResponse
 */
export interface CueCueNumberDeleteSliceMarkerResponse {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDeleteSliceMarkerResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberDeleteSliceMarkerResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof CueCueNumberDeleteSliceMarkerResponse
     */
    data?: object;
}

export function CueCueNumberDeleteSliceMarkerResponseFromJSON(json: any): CueCueNumberDeleteSliceMarkerResponse {
    return CueCueNumberDeleteSliceMarkerResponseFromJSONTyped(json, false);
}

export function CueCueNumberDeleteSliceMarkerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberDeleteSliceMarkerResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function CueCueNumberDeleteSliceMarkerResponseToJSON(value?: CueCueNumberDeleteSliceMarkerResponse | null): any {
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

