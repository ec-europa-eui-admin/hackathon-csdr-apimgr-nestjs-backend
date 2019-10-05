import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule, Module } from '@nestjs/common';
import { EuiAppsService } from '../eui-apps/eui-apps.service';
import { EuiAppsController } from '../eui-apps/eui-apps.controller';
import { ApiGatewayService } from './api-gateway.service';
import { ApiGatewayController } from './api-gateway.controller';

@Module({
    imports: [HttpModule],
    controllers: [ApiGatewayController],
    providers: [ApiGatewayService],
})
export class ApiGatewayModule {
}
