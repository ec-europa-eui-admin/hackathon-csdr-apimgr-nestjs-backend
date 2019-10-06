"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("@nestjs/common");
const eui_apps_service_1 = require("./eui-apps.service");
const eui_apps_controller_1 = require("./eui-apps.controller");
const eui_apps_schema_1 = require("./eui-apps.schema");
let EuiAppsModule = class EuiAppsModule {
};
EuiAppsModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule, mongoose_1.MongooseModule.forFeature([
                { name: 'EuiAppSchema', schema: eui_apps_schema_1.EuiAppSchema },
                { name: 'EnvConfigSchema', schema: eui_apps_schema_1.EnvConfigSchema },
                { name: 'AppConfigurationSchema', schema: eui_apps_schema_1.AppConfigurationSchema },
            ])],
        controllers: [eui_apps_controller_1.EuiAppsController],
        providers: [eui_apps_service_1.EuiAppsService],
    })
], EuiAppsModule);
exports.EuiAppsModule = EuiAppsModule;
//# sourceMappingURL=eui-apps.module.js.map