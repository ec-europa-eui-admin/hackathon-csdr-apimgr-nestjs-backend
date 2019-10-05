import { EnvConfigDto } from './eui-apps.dto';

export interface EuiApp {
    readonly name: string;
    readonly desc: string;
    readonly envConfigs: Array<EnvConfig>;
    readonly appRole: string;
}

export interface EnvConfig {
    readonly envName: string;
    readonly configuration: AppConfiguration;
    readonly apiGatewayAppId: string;
}

export interface AppConfiguration {
    readonly features: object;
    readonly openIdConnect: object;
    readonly modules: object;
}
