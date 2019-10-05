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
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let ApiGatewayService = class ApiGatewayService {
    constructor(httpService) {
        this.httpService = httpService;
        this.username = 'gy93144GEaTQP0MRzaohzs3_Zw4a';
        this.password = 'D5BR8faUqKrssAEosBtABO3AiJAa';
    }
    searchAPIByName(APIName) {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/rest?api_name=' + APIName;
        return this.httpService.get(url, {
            auth: {
                username,
                password,
            },
        }).pipe(operators_1.map(res => res.data), operators_1.map(data => data.list));
    }
    getGatewayApps() {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/application';
        return this.httpService.get(url, {
            auth: {
                username,
                password,
            },
        }).pipe(operators_1.map(res => res.data), operators_1.map(data => data.list));
    }
    getAppSubscriptions(appId) {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/subscription/application/' + appId;
        return this.httpService.get(url, {
            auth: {
                username,
                password,
            },
        }).pipe(operators_1.map(res => res.data), operators_1.map(data => data.list));
    }
    getRestDetail(appName) {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/rest';
        return this.httpService.get(url, {
            params: {
                api_name: appName,
            },
            auth: {
                username,
                password,
            },
        }).pipe(operators_1.map(res => res.data), operators_1.map(data => data.list[0]));
    }
    getApiName(apiIdentifier) {
        const encodedName = decodeURI(apiIdentifier);
        const decodedArray = encodedName.split('-');
        const cleanedArray = decodedArray.splice(1, decodedArray.length - 2);
        return cleanedArray.join('-');
    }
    subscribeToApi(appId, data) {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/subscription/' + appId + '/apis';
        return this.httpService.put(url, data, {
            auth: {
                username,
                password,
            },
        }).pipe(operators_1.map(res => res.data), operators_1.map(data => data.list));
    }
};
ApiGatewayService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], ApiGatewayService);
exports.ApiGatewayService = ApiGatewayService;
//# sourceMappingURL=api-gateway.service.js.map