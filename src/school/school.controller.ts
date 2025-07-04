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
import { CreateSchoolDto } from 'src/dtos/create-school.dto';
import { UpdateSchoolDto } from 'src/dtos/update-schol.dto';
import { School } from '@prisma/client';

@Controller('school')
export class SchoolController {
  constructor(private readonly schoolService: SchoolService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<School | null> {
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
  async remove(@Param('id') id: string): Promise<Pick<School, 'id' | 'name'>> {
    return await this.schoolService.remove(id);
  }
}
