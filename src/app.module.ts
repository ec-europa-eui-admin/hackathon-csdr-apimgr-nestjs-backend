import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EuiAppsController } from './eui-apps/eui-apps.controller';
import { ApiGatewayController } from './api-gateway/api-gateway.controller';
import { ApiGatewayService } from './api-gateway/api-gateway.service';
import { EuiAppsService } from './eui-apps/eui-apps.service';

@Module({
    imports: [HttpModule],
    controllers: [AppController, EuiAppsController, ApiGatewayController],
    providers: [AppService, ApiGatewayService, EuiAppsService],
})
export class AppModule {
}
