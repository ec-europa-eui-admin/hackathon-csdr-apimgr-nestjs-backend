import { Test, TestingModule } from '@nestjs/testing';
import { EuiAppsController } from './eui-apps.controller';

describe('EuiApps Controller', () => {
  let controller: EuiAppsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EuiAppsController],
    }).compile();

    controller = module.get<EuiAppsController>(EuiAppsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
