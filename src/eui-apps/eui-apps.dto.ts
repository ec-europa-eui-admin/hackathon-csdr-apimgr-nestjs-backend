import { ApiModelProperty } from '@nestjs/swagger';

export class AppConfigurationDto {
    @ApiModelProperty()
    readonly features: object;
    @ApiModelProperty()
    readonly openIdConnect: object;
    @ApiModelProperty()
    readonly modules: object;
}

export class EnvConfigDto {
    @ApiModelProperty()
    readonly envName: string;
    @ApiModelProperty({ type: AppConfigurationDto })
    readonly configuration: AppConfigurationDto;
    @ApiModelProperty()
    readonly apiGatewayAppId: string;
}

export class EuiAppDto {
    @ApiModelProperty()
    readonly name: string;
    @ApiModelProperty()
    readonly desc: string;
    @ApiModelProperty({ type: [EnvConfigDto] })
    readonly envConfigs: Array<EnvConfigDto>;
    @ApiModelProperty()
    readonly appRole: string;
}



