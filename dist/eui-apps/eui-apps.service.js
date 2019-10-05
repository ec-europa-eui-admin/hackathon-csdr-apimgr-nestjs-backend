"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a, _b, _c;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
let EuiAppsService = class EuiAppsService {
    constructor(euiAppModel, envConfigModel, appConfigurationModel) {
        this.euiAppModel = euiAppModel;
        this.envConfigModel = envConfigModel;
        this.appConfigurationModel = appConfigurationModel;
    }
    async create(createEuiAppDto) {
        const createdEuiApp = new this.euiAppModel(createEuiAppDto);
        return await createdEuiApp.save();
    }
    async findAll() {
        return await this.euiAppModel.find().exec();
    }
    async findOne(_id) {
        return await this.euiAppModel.findOne({ _id }).exec();
    }
    async update(_id, data) {
        return await this.euiAppModel.findOneAndUpdate({ _id }, data).exec();
    }
    async save(_id, data) {
        const euiApp = await this.euiAppModel.findOne({ _id }).exec();
        return await euiApp.save(data);
    }
    async updateEnvConfig(appId, envConfigId, data) {
        const euiAppObj = await this.euiAppModel.findOne({ _id: appId }).exec();
        const index = euiAppObj.envConfigs.findIndex((config) => {
            return config._id == envConfigId;
        });
        euiAppObj.envConfigs[index] = Object.assign(euiAppObj.envConfigs[index], data);
        const euiApp = new this.euiAppModel(euiAppObj);
        return await euiApp.save();
    }
    async updateAppConfig(appId, appConfigId, data) {
        const euiAppObj = await this.euiAppModel.findOne({ _id: appId }).exec();
        const index = euiAppObj.envConfigs.findIndex((config) => {
            return config.configuration._id == appConfigId;
        });
        euiAppObj.envConfigs[index].configuration = Object.assign(euiAppObj.envConfigs[index].configuration, data);
        const euiApp = new this.euiAppModel(euiAppObj);
        return await euiApp.save();
    }
    async remove(_id) {
        return await this.euiAppModel.remove({ _id }).exec();
    }
};
EuiAppsService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('EuiAppSchema')),
    __param(1, mongoose_2.InjectModel('EnvConfigSchema')),
    __param(2, mongoose_2.InjectModel('AppConfigurationSchema')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object, typeof (_b = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _b : Object, typeof (_c = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _c : Object])
], EuiAppsService);
exports.EuiAppsService = EuiAppsService;
//# sourceMappingURL=eui-apps.service.js.map