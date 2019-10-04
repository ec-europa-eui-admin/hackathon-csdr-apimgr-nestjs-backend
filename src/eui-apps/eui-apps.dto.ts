export class EuiAppDto {
    readonly name: string;
    readonly envConfigs: Array<EnvConfig>;
    readonly appRole: string;
}

export class EnvConfig {
    readonly envName: string;
    readonly configuration: object;
    readonly apiGatewayAppId: string;
}

