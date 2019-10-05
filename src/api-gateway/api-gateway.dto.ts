import { ApiModelProperty } from '@nestjs/swagger';

export class ApiGateWayAppDto {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly apiGateWayId: string;
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
