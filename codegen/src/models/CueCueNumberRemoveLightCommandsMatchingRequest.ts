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
 * @interface CueCueNumberRemoveLightCommandsMatchingRequest
 */
export interface CueCueNumberRemoveLightCommandsMatchingRequest {
    /**
     * 
     * @type {string}
     * @memberof CueCueNumberRemoveLightCommandsMatchingRequest
     */
    string?: string;
}

export function CueCueNumberRemoveLightCommandsMatchingRequestFromJSON(json: any): CueCueNumberRemoveLightCommandsMatchingRequest {
    return CueCueNumberRemoveLightCommandsMatchingRequestFromJSONTyped(json, false);
}

export function CueCueNumberRemoveLightCommandsMatchingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CueCueNumberRemoveLightCommandsMatchingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'string': !exists(json, 'string') ? undefined : json['string'],
    };
}

export function CueCueNumberRemoveLightCommandsMatchingRequestToJSON(value?: CueCueNumberRemoveLightCommandsMatchingRequest | null): any {
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

