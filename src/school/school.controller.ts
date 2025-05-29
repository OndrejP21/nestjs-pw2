import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { SchoolService } from './school.service';
import { School } from 'generated/prisma';
import { CreateSchoolDto } from 'src/dtos/create-school.dto';
import { UpdateSchoolDto } from 'src/dtos/update-schol.dto';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<School> {
    return await this.schoolService.findOne(id);
  }

  @Get()
  async getAll(): Promise<Array<School>> {
    return await this.schoolService.findAll();
  }

  @Post()
  async create(@Body() dto: CreateSchoolDto) {
    return await this.schoolService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: UpdateSchoolDto) {
    return await this.schoolService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.schoolService.remove(id);
  }
}
