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
 * response object for /selectedCues/shallow
 * @export
 * @interface SelectedCuesShallowResponse
 */
export interface SelectedCuesShallowResponse {
    /**
     * 
     * @type {string}
     * @memberof SelectedCuesShallowResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof SelectedCuesShallowResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof SelectedCuesShallowResponse
     */
    data?: object;
}

export function SelectedCuesShallowResponseFromJSON(json: any): SelectedCuesShallowResponse {
    return SelectedCuesShallowResponseFromJSONTyped(json, false);
}

export function SelectedCuesShallowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelectedCuesShallowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function SelectedCuesShallowResponseToJSON(value?: SelectedCuesShallowResponse | null): any {
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

