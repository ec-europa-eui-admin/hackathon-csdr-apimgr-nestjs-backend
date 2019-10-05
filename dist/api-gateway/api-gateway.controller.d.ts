import { ApiGatewayService } from './api-gateway.service';
import { ApiGateWayAppDto, ApiIdListDto } from './api-gateway.dto';
import { Observable } from 'rxjs';
export declare class ApiGatewayController {
    private apiGatewayService;
    constructor(apiGatewayService: ApiGatewayService);
    findAll(query: any): Observable<Array<ApiGateWayAppDto>>;
    findOne(appId: string): any;
    update(appId: string, apiIdList: ApiIdListDto): any;
}
