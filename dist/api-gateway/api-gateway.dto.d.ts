export declare class ApiGateWayAppDto {
    readonly name: string;
    readonly apiGateWayId: string;
}
export declare class ApiGateWayApiDto {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly context: string;
    readonly version: string;
    readonly provider: string;
    readonly status: string;
    readonly visibity: string;
    readonly sequences: string;
    readonly corsConfiguration: string;
    readonly businessInformation: string;
    readonly gatewayEnvironments: string;
    readonly endpointConfig: string;
    readonly callError: string;
    readonly callErrorMessage: string;
    readonly callID: string;
    readonly wsdlUri: string;
    readonly isDefaultVersion: boolean;
}
export declare class AppSubscriptionsDto {
    readonly subscriptionId: string;
    readonly apiIdentifier: string;
    readonly applicationId: string;
    readonly tier: string;
    readonly callError: boolean;
    readonly callErrorMessage: string;
    readonly callID: string;
}
export declare class ApiIdListDto {
    idList: Array<String>;
}
