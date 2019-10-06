import { ApiModelProperty } from '@nestjs/swagger';

export class ApiGateWayAppDto {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly apiGateWayId: string;
}

export class ApiGateWayAPIDto {
    @ApiModelProperty()
    readonly id: string;
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly description: string;
    @ApiModelProperty()
    readonly context: string;
    @ApiModelProperty()
    readonly version: string;
    @ApiModelProperty()
    readonly provider: string;
    @ApiModelProperty()
    readonly status: string;
    @ApiModelProperty()
    readonly visibity: string;
    @ApiModelProperty()
    readonly sequences: string;
    @ApiModelProperty()
    readonly corsConfiguration: string;
    @ApiModelProperty()
    readonly businessInformation: string;
    @ApiModelProperty()
    readonly gatewayEnvironments: string;
    @ApiModelProperty()
    readonly endpointConfig: string;
    @ApiModelProperty()
    readonly callError: string;
    @ApiModelProperty()
    readonly callErrorMessage: string;
    @ApiModelProperty()
    readonly callID: string;
    @ApiModelProperty()
    readonly wsdlUri: string;
    @ApiModelProperty()
    readonly isDefaultVersion: boolean;
}


export class AppSubscriptionsDto {
    @ApiModelProperty()
    readonly subscriptionId: string;
    @ApiModelProperty()
    readonly apiIdentifier: string;
    @ApiModelProperty()
    readonly applicationId: string;
    @ApiModelProperty()
    readonly tier: string;
    @ApiModelProperty()
    readonly callError: boolean;
    @ApiModelProperty()
    readonly callErrorMessage: string;
    @ApiModelProperty()
    readonly callID: string;
}

export class ApiIdListDto {
    @ApiModelProperty()
    idList: Array<String>;
}
