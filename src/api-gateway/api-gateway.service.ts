import { Injectable, HttpService, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AxiosResponse } from 'axios';
import { ApiGateWayAppSubscribeToApi, ApiGatewayAppSubscriptions } from './api-gateway.dto';

@Injectable()
export class ApiGatewayService {
    username = 'gy93144GEaTQP0MRzaohzs3_Zw4a';
    password = 'D5BR8faUqKrssAEosBtABO3AiJAa';

    constructor(private readonly httpService: HttpService) {

    }

    getGatewayApps(): Observable<AxiosResponse<any>> {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/application';
        return this.httpService.get(url, {
            auth: {
                username,
                password,
            },
        }).pipe(map(res => res.data),
            map(data => data.list));
    }

    getAppSubscriptions(appId: string): Observable<Array<ApiGatewayAppSubscriptions>> {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/subscription/application/' + appId;
        return this.httpService.get(url, {
            auth: {
                username,
                password,
            },
        }).pipe(map(res => res.data),
            map(data => data.list));
    }

    getRestDetail(appName: string): Observable<any> {
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
        }).pipe(
            map(res => res.data),
            map(data => data.list),
        );
    }

    getApiName(apiIdentifier: string): string {
        const encodedName = decodeURI(apiIdentifier);
        const decodedArray = encodedName.split('-');
        const cleanedArray = decodedArray.splice(1, decodedArray.length - 2);
        return cleanedArray.join('-');
    }

    subscribeToApi(appId: string, data: ApiGateWayAppSubscribeToApi): Observable<ApiGatewayAppSubscriptions> {
        let username = this.username;
        let password = this.password;
        const url = 'https://gateway.theinterlink.eu:8443/subscription/' + appId + '/apis';
        return this.httpService.put(url, data, {
            auth: {
                username,
                password,
            },
        }).pipe(
            map(res => res.data),
            map(data => data.list),
        );
    }
}


