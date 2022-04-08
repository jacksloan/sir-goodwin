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
 * response object for /workspace/{id}/dashboard/newCueWithChanges
 * @export
 * @interface WorkspaceIdDashboardNewCueWithChangesResponse
 */
export interface WorkspaceIdDashboardNewCueWithChangesResponse {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNewCueWithChangesResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceIdDashboardNewCueWithChangesResponse
     */
    address?: string;
    /**
     * 
     * @type {object}
     * @memberof WorkspaceIdDashboardNewCueWithChangesResponse
     */
    data?: object;
}

export function WorkspaceIdDashboardNewCueWithChangesResponseFromJSON(json: any): WorkspaceIdDashboardNewCueWithChangesResponse {
    return WorkspaceIdDashboardNewCueWithChangesResponseFromJSONTyped(json, false);
}

export function WorkspaceIdDashboardNewCueWithChangesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkspaceIdDashboardNewCueWithChangesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'address': !exists(json, 'address') ? undefined : json['address'],
        'data': !exists(json, 'data') ? undefined : json['data'],
    };
}

export function WorkspaceIdDashboardNewCueWithChangesResponseToJSON(value?: WorkspaceIdDashboardNewCueWithChangesResponse | null): any {
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

