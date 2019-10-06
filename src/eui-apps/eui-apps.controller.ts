import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AppConfigurationDto, EnvConfigDto, EuiAppDto } from './eui-apps.dto';
import { EuiAppsService } from './eui-apps.service';
import { EuiApp } from './eui-apps.interface';
import { ApiUseTags } from '@nestjs/swagger';
import { ApiImplicitQuery } from '@nestjs/swagger';


@ApiUseTags('eui-apps')
@Controller('eui-apps')
export class EuiAppsController {

    constructor(private euiAppsService: EuiAppsService,
    ) {
    }

    @Get()
    @ApiImplicitQuery({
        name: 'name',
        type: String,
        required: false
    })
    findAll(@Query('name') name: string): Promise<EuiApp[]> {
        return this.euiAppsService.findAll(name);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.euiAppsService.findOne(id);
    }

    @Post()
    create(@Body() createEuiAppDto: EuiAppDto): Promise<EuiApp> {
        return this.euiAppsService.create(createEuiAppDto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateEuiAppDto: EuiAppDto): Promise<EuiApp> {
        return this.euiAppsService.update(id, updateEuiAppDto);
    }

    @Post(':id')
    save(@Param('id') id: string, @Body() updateEuiAppDto: EuiAppDto): Promise<EuiApp> {
        return this.euiAppsService.save(id, updateEuiAppDto);
    }

    @Post('env-config/:appId/:envConfigId')
    updateEnvConfig(@Param('appId') appId: string, @Param('envConfigId') envConfigId: string, @Body() updateEnvConfigDto: EnvConfigDto): Promise<EuiApp> {
        return this.euiAppsService.updateEnvConfig(appId, envConfigId, updateEnvConfigDto);
    }

    @Post('app-config/:appId/:appConfigId')
    updateAppConfig(@Param('appId') appId: string, @Param('appConfigId') appConfigId: string, @Body() updateEnvConfigDto: AppConfigurationDto): Promise<EuiApp> {
        return this.euiAppsService.updateAppConfig(appId, appConfigId, updateEnvConfigDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<EuiApp> {
        return this.euiAppsService.remove(id);
    }
}

