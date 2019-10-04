export declare class ApiGateWayDto {
    readonly name: string;
    readonly apiGateWayId: string;
    readonly subscribedSources: Array<string>;
}
export declare type ApiGatewayAppSubscriptions = {
    subscriptionId: string;
    apiIdentifier: string;
    applicationId: string;
    tier: string;
    callError: boolean;
    callErrorMessage: string;
    callID: string;
};
export declare type ApiGateWayAppSubscribeToApi = {
    idList: Array<String>;
};
