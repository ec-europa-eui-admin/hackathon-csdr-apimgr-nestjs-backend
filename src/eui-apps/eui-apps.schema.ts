import * as mongoose from 'mongoose';

export const AppConfigurationSchema = new mongoose.Schema({
    features: Object,
    openIdConnect: Object,
    modules: Object,
    lastUpdated: { type: Date, 'default': Date.now },
});

export const EnvConfigSchema = new mongoose.Schema({
    envName: String,
    configuration: AppConfigurationSchema,
    apiGatewayAppId: String,
    lastUpdated: { type: Date, 'default': Date.now },
});

export const EuiAppSchema = new mongoose.Schema({
    name: String,
    desc: String,
    envConfigs: [EnvConfigSchema],
    roleId: [String],
    lastUpdated: { type: Date, 'default': Date.now },
});
[EnvConfigSchema, EuiAppSchema, AppConfigurationSchema].forEach((schema) => {
    schema.pre('save', function (next) {
        this.lastUpdated = Date.now();
        next();
    });
});


