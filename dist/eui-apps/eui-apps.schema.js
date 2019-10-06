"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.AppConfigurationSchema = new mongoose.Schema({
    features: Object,
    openIdConnect: Object,
    modules: Object,
    lastUpdated: { type: Date, 'default': Date.now },
});
exports.EnvConfigSchema = new mongoose.Schema({
    envName: String,
    configuration: exports.AppConfigurationSchema,
    apiGatewayAppId: String,
    lastUpdated: { type: Date, 'default': Date.now },
});
exports.EuiAppSchema = new mongoose.Schema({
    name: String,
    desc: String,
    envConfigs: [exports.EnvConfigSchema],
    roleId: [String],
    lastUpdated: { type: Date, 'default': Date.now },
});
[exports.EnvConfigSchema, exports.EuiAppSchema, exports.AppConfigurationSchema].forEach((schema) => {
    schema.pre('save', function (next) {
        this.lastUpdated = Date.now();
        next();
    });
});
//# sourceMappingURL=eui-apps.schema.js.map