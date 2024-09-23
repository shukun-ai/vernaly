import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantModel } from './tenant.service.interface';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async findAll(): Promise<unknown> {
    return 'a';
  }

  @Get(':tenantName')
  async findOne(@Param('tenantName') tenantName: string): Promise<TenantModel> {
    return await this.tenantService.findOne(tenantName);
  }

  @Post()
  create(@Body() createTenantDto: any): string {
    return 'This action adds a new tenant';
  }
}
