import { ApiGatewayService } from './api-gateway.service';
import { ApiGateWayAppDto, ApiIdListDto, ApiGateWayApiDto } from './api-gateway.dto';
import { Observable } from 'rxjs';
export declare class ApiGatewayController {
    private apiGatewayService;
    constructor(apiGatewayService: ApiGatewayService);
    searchAPI(api_name: string): Observable<Array<ApiGateWayApiDto>>;
    findAll(query: any): Observable<Array<ApiGateWayAppDto>>;
    findOne(appId: string): any;
    update(appId: string, apiIdList: ApiIdListDto): any;
}
