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
const common_1 = require("@nestjs/common");
const eui_apps_dto_1 = require("./eui-apps.dto");
const eui_apps_service_1 = require("./eui-apps.service");
const swagger_1 = require("@nestjs/swagger");
const swagger_2 = require("@nestjs/swagger");
let EuiAppsController = class EuiAppsController {
    constructor(euiAppsService) {
        this.euiAppsService = euiAppsService;
    }
    findAll(name) {
        return this.euiAppsService.findAll(name);
    }
    findOne(id) {
        return this.euiAppsService.findOne(id);
    }
    create(createEuiAppDto) {
        return this.euiAppsService.create(createEuiAppDto);
    }
    update(id, updateEuiAppDto) {
        return this.euiAppsService.update(id, updateEuiAppDto);
    }
    save(id, updateEuiAppDto) {
        return this.euiAppsService.save(id, updateEuiAppDto);
    }
    updateEnvConfig(appId, envConfigId, updateEnvConfigDto) {
        return this.euiAppsService.updateEnvConfig(appId, envConfigId, updateEnvConfigDto);
    }
    updateAppConfig(appId, appConfigId, updateEnvConfigDto) {
        return this.euiAppsService.updateAppConfig(appId, appConfigId, updateEnvConfigDto);
    }
    remove(id) {
        return this.euiAppsService.remove(id);
    }
};
__decorate([
    common_1.Get(),
    swagger_2.ApiImplicitQuery({
        name: 'name',
        type: String,
        required: false
    }),
    __param(0, common_1.Query('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EuiAppsController.prototype, "findOne", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [eui_apps_dto_1.EuiAppDto]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, eui_apps_dto_1.EuiAppDto]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "update", null);
__decorate([
    common_1.Post(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, eui_apps_dto_1.EuiAppDto]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "save", null);
__decorate([
    common_1.Post('env-config/:appId/:envConfigId'),
    __param(0, common_1.Param('appId')), __param(1, common_1.Param('envConfigId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, eui_apps_dto_1.EnvConfigDto]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "updateEnvConfig", null);
__decorate([
    common_1.Post('app-config/:appId/:appConfigId'),
    __param(0, common_1.Param('appId')), __param(1, common_1.Param('appConfigId')), __param(2, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, eui_apps_dto_1.AppConfigurationDto]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "updateAppConfig", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EuiAppsController.prototype, "remove", null);
EuiAppsController = __decorate([
    swagger_1.ApiUseTags('eui-apps'),
    common_1.Controller('eui-apps'),
    __metadata("design:paramtypes", [eui_apps_service_1.EuiAppsService])
], EuiAppsController);
exports.EuiAppsController = EuiAppsController;
//# sourceMappingURL=eui-apps.controller.js.map