"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const eui_apps_controller_1 = require("./eui-apps/eui-apps.controller");
const api_gateway_controller_1 = require("./api-gateway/api-gateway.controller");
const api_gateway_service_1 = require("./api-gateway/api-gateway.service");
const eui_apps_service_1 = require("./eui-apps/eui-apps.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [common_1.HttpModule],
        controllers: [app_controller_1.AppController, eui_apps_controller_1.EuiAppsController, api_gateway_controller_1.ApiGatewayController],
        providers: [app_service_1.AppService, api_gateway_service_1.ApiGatewayService, eui_apps_service_1.EuiAppsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map