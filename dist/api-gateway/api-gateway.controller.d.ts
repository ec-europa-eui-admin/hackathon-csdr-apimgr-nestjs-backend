import { ApiGatewayService } from './api-gateway.service';
import { ApiGateWayAppSubscribeToApi } from './api-gateway.dto';
export declare class ApiGatewayController {
    private apiGatewayService;
    constructor(apiGatewayService: ApiGatewayService);
    findAll(query: any): any;
    findOne(id: string): any;
    update(id: string, apiGateWayAppSubscribeToApi: ApiGateWayAppSubscribeToApi): any;
}
