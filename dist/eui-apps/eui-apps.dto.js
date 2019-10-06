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
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_1 = require("@nestjs/swagger");
class AppConfigurationDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], AppConfigurationDto.prototype, "features", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], AppConfigurationDto.prototype, "openIdConnect", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Object)
], AppConfigurationDto.prototype, "modules", void 0);
exports.AppConfigurationDto = AppConfigurationDto;
class EnvConfigDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], EnvConfigDto.prototype, "envName", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: AppConfigurationDto }),
    __metadata("design:type", AppConfigurationDto)
], EnvConfigDto.prototype, "configuration", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], EnvConfigDto.prototype, "apiGatewayAppId", void 0);
exports.EnvConfigDto = EnvConfigDto;
class EuiAppDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], EuiAppDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], EuiAppDto.prototype, "desc", void 0);
__decorate([
    swagger_1.ApiModelProperty({ type: [EnvConfigDto] }),
    __metadata("design:type", Array)
], EuiAppDto.prototype, "envConfigs", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], EuiAppDto.prototype, "appRole", void 0);
exports.EuiAppDto = EuiAppDto;
//# sourceMappingURL=eui-apps.dto.js.map