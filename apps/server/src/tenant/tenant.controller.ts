import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TenantService } from './tenant.service';

@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async findAll(): Promise<unknown> {
    console.log('This action returns all tenants');
    return await this.tenantService.get('name35');
    // return 'sss';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a tenant with id ${id}`;
  }

  @Post()
  create(@Body() createTenantDto: any): string {
    return 'This action adds a new tenant';
  }
}
