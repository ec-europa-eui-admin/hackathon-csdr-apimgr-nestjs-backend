import { EuiAppDto } from './eui-apps.dto';
export declare class EuiAppsController {
    create(createEuiAppDto: EuiAppDto): string;
    findAll(query: any): string;
    findOne(id: string): string;
    update(id: string, updateCatDto: EuiAppDto): string;
    remove(id: string): string;
}
