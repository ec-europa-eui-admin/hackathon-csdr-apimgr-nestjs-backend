import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ApiGateWayAppDto, ApiIdListDto, AppSubscriptionsDto, ApiGateWayApiDto } from './api-gateway.dto';
export declare class ApiGatewayService {
    private readonly httpService;
    username: string;
    password: string;
    constructor(httpService: HttpService);
    searchApiByName(APIName: string): Observable<Array<ApiGateWayApiDto>>;
    getGatewayApps(): Observable<Array<ApiGateWayAppDto>>;
    getAppSubscriptions(appId: string): Observable<Array<AppSubscriptionsDto>>;
    getRestDetail(appName: string): Observable<AppSubscriptionsDto>;
    getApiName(apiIdentifier: string): string;
    subscribeToApi(appId: string, data: ApiIdListDto): any;
}
