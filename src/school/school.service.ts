import { Injectable } from '@nestjs/common';
import { School } from '@prisma/client';
import { PrismaService } from 'src/db/prisma.service';
import { CreateSchoolDto } from 'src/dtos/create-school.dto';
import { UpdateSchoolDto } from 'src/dtos/update-schol.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Array<School>> {
    return await this.prismaService.school.findMany();
  }

  async findOne(id: string): Promise<School | null> {
    return await this.prismaService.school.findUnique({
      where: { id },
    });
  }

  async create(dto: CreateSchoolDto): Promise<School> {
    return await this.prismaService.school.create({
      data: dto,
    });
  }

  async update(id: string, dto: UpdateSchoolDto): Promise<School> {
    return await this.prismaService.school.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<Pick<School, 'id'>> {
    return await this.prismaService.school.delete({
      where: { id },
      select: { id: true },
    });
  }
}
