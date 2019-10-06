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
const api_gateway_service_1 = require("./api-gateway.service");
const operators_1 = require("rxjs/operators");
const rxjs_1 = require("rxjs");
const api_gateway_dto_1 = require("./api-gateway.dto");
const rxjs_2 = require("rxjs");
const swagger_1 = require("@nestjs/swagger");
let ApiGatewayController = class ApiGatewayController {
    constructor(apiGatewayService) {
        this.apiGatewayService = apiGatewayService;
    }
    searchAPI(api_name) {
        return this.apiGatewayService.searchApiByName(api_name);
    }
    findAll(query) {
        return this.apiGatewayService.getGatewayApps();
    }
    findOne(appId) {
        return this.apiGatewayService.getAppSubscriptions(appId).pipe(operators_1.map(apiS => apiS.map((api) => this.apiGatewayService.getApiName(api.apiIdentifier))), operators_1.switchMap((apiNames) => {
            const requests = apiNames.map((apiName) => this.apiGatewayService.getRestDetail(apiName));
            return rxjs_1.forkJoin(requests);
        }));
    }
    update(appId, apiIdList) {
        return this.apiGatewayService.subscribeToApi(appId, apiIdList);
    }
};
__decorate([
    common_1.Get('apis/:api_name'),
    __param(0, common_1.Param('api_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", rxjs_2.Observable)
], ApiGatewayController.prototype, "searchAPI", null);
__decorate([
    common_1.Get('applications'),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", rxjs_2.Observable)
], ApiGatewayController.prototype, "findAll", null);
__decorate([
    common_1.Get('subscriptions/:appId'),
    __param(0, common_1.Param('appId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ApiGatewayController.prototype, "findOne", null);
__decorate([
    common_1.Put('subscribe-to-api/:appId'),
    __param(0, common_1.Param('appId')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, api_gateway_dto_1.ApiIdListDto]),
    __metadata("design:returntype", Object)
], ApiGatewayController.prototype, "update", null);
ApiGatewayController = __decorate([
    swagger_1.ApiUseTags('api-gateway'),
    common_1.Controller('api-gateway'),
    __metadata("design:paramtypes", [api_gateway_service_1.ApiGatewayService])
], ApiGatewayController);
exports.ApiGatewayController = ApiGatewayController;
//# sourceMappingURL=api-gateway.controller.js.map