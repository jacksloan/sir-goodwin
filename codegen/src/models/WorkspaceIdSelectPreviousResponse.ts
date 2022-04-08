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
 * response object for /workspace/{id}/select/previous
 * @export
 * @interface WorkspaceIdSelectPreviousResponse
 */
export interface WorkspaceIdSelectPreviousResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdSelectPreviousResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdSelectPreviousResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdSelectPreviousResponse
     */
    data?: object;
}

export function WorkspaceIdSelectPreviousResponseFromJSON(json: any): WorkspaceIdSelectPreviousResponse {
    return WorkspaceIdSelectPreviousResponseFromJSONTyped(json, false);
}

export function WorkspaceIdSelectPreviousResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdSelectPreviousResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdSelectPreviousResponseToJSON(value?: WorkspaceIdSelectPreviousResponse | null): any {
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

