import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EuiAppDto} from './eui-apps.dto';

@Controller('eui-apps')
export class EuiAppsController {
    @Post()
    create(@Body() createEuiAppDto: EuiAppDto) {
        return 'This action adds a new cat';
    }

    @Get()
    findAll(@Query() query: any) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: EuiAppDto) {
        return `This action updates a #${id} cat`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} cat`;
    }
}

