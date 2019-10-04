import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';
import { map, switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { ApiGateWayAppSubscribeToApi } from './api-gateway.dto';

@Controller('api-gateway')
export class ApiGatewayController {
    constructor(private apiGatewayService: ApiGatewayService,
    ) {
    }

    @Get()
    findAll(@Query() query: any): any {
        return this.apiGatewayService.getGatewayApps();
    }

    @Get(':id')
    findOne(@Param('id') id: string): any {
        return this.apiGatewayService.getAppSubscriptions(id).pipe(
            map(apiS => apiS.map((api) => this.apiGatewayService.getApiName(api.apiIdentifier))),
            switchMap((apiNames) => {
                const requests = apiNames.map((apiName) => this.apiGatewayService.getRestDetail(apiName));

                // group all the observables with forkJoin and deep merge them
                return forkJoin(requests);
            }),
            map(sources => sources),
        );
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() apiGateWayAppSubscribeToApi: ApiGateWayAppSubscribeToApi): any {
        return this.apiGatewayService.subscribeToApi(id, apiGateWayAppSubscribeToApi);
    }
}
