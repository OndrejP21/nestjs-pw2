import { Injectable } from '@nestjs/common';
import { School } from 'generated/prisma';
import { PrismaService } from 'src/db/prisma.service';
import { CreateSchoolDto } from 'src/dtos/create-school.dto';

@Injectable()
export class SchoolService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Array<School>> {
    return await this.prismaService.school.findMany();
  }

  async findOne(id: string): Promise<School> {
    return await this.prismaService.school.findUnique({
      where: { id },
    });
  }

  async create(dto: CreateSchoolDto) {
    return await this.prismaService.school.create({
      data: dto,
    });
  }

  async update(id: string, dto: any) {
    return await this.prismaService.school.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string) {
    return await this.prismaService.school.delete({
      where: { id },
    });
  }
}
