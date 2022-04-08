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
 * response object for /workspace/{id}/panic
 * @export
 * @interface WorkspaceIdPanicResponse
 */
export interface WorkspaceIdPanicResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdPanicResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdPanicResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdPanicResponse
     */
    data?: object;
}

export function WorkspaceIdPanicResponseFromJSON(json: any): WorkspaceIdPanicResponse {
    return WorkspaceIdPanicResponseFromJSONTyped(json, false);
}

export function WorkspaceIdPanicResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdPanicResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdPanicResponseToJSON(value?: WorkspaceIdPanicResponse | null): any {
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

