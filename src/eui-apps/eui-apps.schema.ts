import * as mongoose from 'mongoose';

export const AppConfigurationSchema = new mongoose.Schema({
    features: Object,
    openIdConnect: Object,
    modules: Object,
});

export const EnvConfigSchema = new mongoose.Schema({
    envName: String,
    configuration: AppConfigurationSchema,
    apiGatewayAppId: String,
});

export const EuiAppSchema = new mongoose.Schema({
    name: String,
    description: String,
    envConfigs: [EnvConfigSchema],
    roleId: [String],
});
