import { Model } from 'mongoose';
import { EuiApp, EnvConfig, AppConfiguration } from './eui-apps.interface';
import { AppConfigurationDto, EnvConfigDto, EuiAppDto } from './eui-apps.dto';
export declare class EuiAppsService {
    private readonly euiAppModel;
    private readonly envConfigModel;
    private readonly appConfigurationModel;
    constructor(euiAppModel: Model<EuiApp>, envConfigModel: Model<EnvConfig>, appConfigurationModel: Model<AppConfiguration>);
    create(createEuiAppDto: EuiAppDto): Promise<EuiApp>;
    findAll(): Promise<EuiApp[]>;
    findOne(_id: any): Promise<EuiApp>;
    update(_id: any, data: EuiAppDto): Promise<EuiApp>;
    save(_id: any, data: EuiAppDto): Promise<EuiApp>;
    updateEnvConfig(appId: any, envConfigId: any, data: EnvConfigDto): Promise<EuiApp>;
    updateAppConfig(appId: any, appConfigId: any, data: AppConfigurationDto): Promise<EuiApp>;
    remove(_id: any): Promise<EuiApp>;
}
