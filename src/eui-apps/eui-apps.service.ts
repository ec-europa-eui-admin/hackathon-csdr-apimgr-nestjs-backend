import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AppConfigurationSchema, EuiAppSchema } from './eui-apps.schema';
import { EuiApp, EnvConfig, AppConfiguration } from './eui-apps.interface';
import { AppConfigurationDto, EnvConfigDto, EuiAppDto } from './eui-apps.dto';

@Injectable()
export class EuiAppsService {

    constructor(@InjectModel('EuiAppSchema') private readonly euiAppModel: Model<EuiApp>,
                @InjectModel('EnvConfigSchema') private readonly envConfigModel: Model<EnvConfig>,
                @InjectModel('AppConfigurationSchema') private readonly appConfigurationModel: Model<AppConfiguration>) {
    }

    async create(createEuiAppDto: EuiAppDto): Promise<EuiApp> {
        const createdEuiApp = new this.euiAppModel(createEuiAppDto);
        return await createdEuiApp.save();
    }

    async findAll(): Promise<EuiApp[]> {
        return await this.euiAppModel.find().exec();
    }

    async findOne(_id): Promise<EuiApp> {
        return await this.euiAppModel.findOne({ _id }).exec();
    }

    async update(_id, data: EuiAppDto): Promise<EuiApp> {
        return await this.euiAppModel.findOneAndUpdate({ _id }, data).exec();
    }

    async save(_id, data: EuiAppDto): Promise<EuiApp> {
        const euiApp = await this.euiAppModel.findOne({ _id }).exec();
        return await euiApp.save(data);
    }

    async updateEnvConfig(appId, envConfigId, data: EnvConfigDto): Promise<EuiApp> {
        const euiAppObj = await this.euiAppModel.findOne({ _id: appId }).exec();
        const index = euiAppObj.envConfigs.findIndex((config) => {
            return config._id == envConfigId;
        });
        euiAppObj.envConfigs[index] = Object.assign(euiAppObj.envConfigs[index], data);
        const euiApp = new this.euiAppModel(euiAppObj);
        return await euiApp.save();
    }

    async updateAppConfig(appId, appConfigId, data: AppConfigurationDto): Promise<EuiApp> {
        
        const euiAppObj = await this.euiAppModel.findOne({ _id: appId }).exec();
        const index = euiAppObj.envConfigs.findIndex((config) => {
            return config.configuration._id == appConfigId;
        });
        euiAppObj!.envConfigs[index]!.configuration = Object.assign(euiAppObj!.envConfigs[index]!.configuration, data);
        const euiApp = new this.euiAppModel(euiAppObj);
        return await euiApp.save();
    }

    async remove(_id): Promise<EuiApp> {
        return await this.euiAppModel.remove({ _id }).exec();
    }


}
