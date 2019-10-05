import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { EuiAppsModule } from './eui-apps/eui-apps.module';
import { ApiGatewayModule } from './api-gateway/api-gateway.module';

@Module({
    imports: [
        HttpModule,
        MongooseModule.forRoot('mongodb://mongo:27017/docker-node-mongo'),
        EuiAppsModule,
        ApiGatewayModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
