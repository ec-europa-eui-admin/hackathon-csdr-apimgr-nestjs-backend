import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule, Module } from '@nestjs/common';
import { EuiAppsService } from './eui-apps.service';
import { EuiAppsController } from './eui-apps.controller';
import { EuiAppSchema, EnvConfigSchema, AppConfigurationSchema } from './eui-apps.schema';

@Module({
    imports: [HttpModule, MongooseModule.forFeature([
        { name: 'EuiAppSchema', schema: EuiAppSchema },
        { name: 'EnvConfigSchema', schema: EnvConfigSchema },
        { name: 'AppConfigurationSchema', schema: AppConfigurationSchema },
    ])],
    controllers: [EuiAppsController],
    providers: [EuiAppsService],
})
export class EuiAppsModule {
}
