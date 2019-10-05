export declare class ApiGateWayAppDto {
    readonly name: string;
    readonly apiGateWayId: string;
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
