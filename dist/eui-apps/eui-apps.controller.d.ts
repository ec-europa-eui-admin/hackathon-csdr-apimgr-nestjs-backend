import { AppConfigurationDto, EnvConfigDto, EuiAppDto } from './eui-apps.dto';
import { EuiAppsService } from './eui-apps.service';
import { EuiApp } from './eui-apps.interface';
export declare class EuiAppsController {
    private euiAppsService;
    constructor(euiAppsService: EuiAppsService);
    create(createEuiAppDto: EuiAppDto): Promise<EuiApp>;
    findAll(): Promise<EuiApp[]>;
    findOne(id: string): Promise<EuiApp>;
    update(id: string, updateEuiAppDto: EuiAppDto): Promise<EuiApp>;
    save(id: string, updateEuiAppDto: EuiAppDto): Promise<EuiApp>;
    updateEnvConfig(appId: string, envConfigId: string, updateEnvConfigDto: EnvConfigDto): Promise<EuiApp>;
    updateAppConfig(appId: string, appConfigId: string, updateEnvConfigDto: AppConfigurationDto): Promise<EuiApp>;
    remove(id: string): Promise<EuiApp>;
}
