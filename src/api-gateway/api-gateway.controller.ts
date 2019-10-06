import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ApiGateWayAppDto, ApiIdListDto, ApiGateWayApiDto } from './api-gateway.dto';
import { Observable } from 'rxjs';
import { ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('api-gateway')
@Controller('api-gateway')
export class ApiGatewayController {
    constructor(private apiGatewayService: ApiGatewayService,
    ) {
    }

    @Get('apis/:api_name')
    searchAPI(@Param('api_name') api_name: string): Observable<Array<ApiGateWayApiDto>> {
        return this.apiGatewayService.searchApiByName(api_name);
    }

    @Get('applications')
    findAll(@Query() query: any): Observable<Array<ApiGateWayAppDto>> {
        return this.apiGatewayService.getGatewayApps();
    }

    @Get('subscriptions/:appId')
    findOne(@Param('appId') appId: string): any {
        return this.apiGatewayService.getAppSubscriptions(appId).pipe(
            map(apiS => apiS.map((api) => this.apiGatewayService.getApiName(api.apiIdentifier))),
            switchMap((apiNames: Array<string>) => {
                const requests = apiNames.map((apiName) => this.apiGatewayService.getRestDetail(apiName));
                // group all the observables with forkJoin and deep merge them
                return forkJoin(requests);
            })
        );
    }

    @Put('subscribe-to-api/:appId')
    update(@Param('appId') appId: string, @Body() apiIdList: ApiIdListDto): any {
        return this.apiGatewayService.subscribeToApi(appId, apiIdList);
    }
}
