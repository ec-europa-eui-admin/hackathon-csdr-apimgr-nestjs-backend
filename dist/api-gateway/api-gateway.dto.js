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
class ApiGateWayAppDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ApiGateWayAppDto.prototype, "name", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], ApiGateWayAppDto.prototype, "apiGateWayId", void 0);
exports.ApiGateWayAppDto = ApiGateWayAppDto;
class AppSubscriptionsDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "subscriptionId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "apiIdentifier", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "applicationId", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "tier", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Boolean)
], AppSubscriptionsDto.prototype, "callError", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "callErrorMessage", void 0);
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", String)
], AppSubscriptionsDto.prototype, "callID", void 0);
exports.AppSubscriptionsDto = AppSubscriptionsDto;
class ApiIdListDto {
}
__decorate([
    swagger_1.ApiModelProperty(),
    __metadata("design:type", Array)
], ApiIdListDto.prototype, "idList", void 0);
exports.ApiIdListDto = ApiIdListDto;
//# sourceMappingURL=api-gateway.dto.js.map