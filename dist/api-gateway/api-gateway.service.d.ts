import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ApiGateWayAppSubscribeToApi, ApiGatewayAppSubscriptions } from './api-gateway.dto';
export declare class ApiGatewayService {
    private readonly httpService;
    username: string;
    password: string;
    constructor(httpService: HttpService);
    getGatewayApps(): Observable<AxiosResponse<any>>;
    getAppSubscriptions(appId: string): Observable<Array<ApiGatewayAppSubscriptions>>;
    getRestDetail(appName: string): Observable<any>;
    getApiName(apiIdentifier: string): string;
    subscribeToApi(appId: string, data: ApiGateWayAppSubscribeToApi): Observable<ApiGatewayAppSubscriptions>;
}
