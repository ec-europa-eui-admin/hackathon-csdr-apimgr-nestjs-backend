export declare class AppConfigurationDto {
    readonly features: object;
    readonly openIdConnect: object;
    readonly modules: object;
}
export declare class EnvConfigDto {
    readonly envName: string;
    readonly configuration: AppConfigurationDto;
    readonly apiGatewayAppId: string;
}
export declare class EuiAppDto {
    readonly name: string;
    readonly desc: string;
    readonly envConfigs: Array<EnvConfigDto>;
    readonly appRole: string;
}
