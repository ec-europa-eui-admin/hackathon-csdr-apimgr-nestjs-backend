"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.AppConfigurationSchema = new mongoose.Schema({
    features: Object,
    openIdConnect: Object,
    modules: Object,
});
exports.EnvConfigSchema = new mongoose.Schema({
    envName: String,
    configuration: exports.AppConfigurationSchema,
    apiGatewayAppId: String,
});
exports.EuiAppSchema = new mongoose.Schema({
    name: String,
    desc: String,
    envConfigs: [exports.EnvConfigSchema],
    roleId: [String],
});
//# sourceMappingURL=eui-apps.schema.js.map