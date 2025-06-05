import { Injectable, NotFoundException } from '@nestjs/common';
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
    const school = await this.prismaService.school.findUnique({
      where: { id },
    });

    if (!school) throw new NotFoundException(`School with id ${id} not found`);

    return school;
  }

  async create(dto: CreateSchoolDto): Promise<School> {
    return await this.prismaService.school.create({
      data: dto,
    });
  }

  async update(id: string, dto: UpdateSchoolDto): Promise<School> {
    const school = await this.prismaService.school.findUnique({
      where: { id },
    });

    if (!school) throw new NotFoundException(`School with id ${id} not found`);

    return await this.prismaService.school.update({
      where: { id },
      data: dto,
    });
  }

  async remove(id: string): Promise<Pick<School, 'id' | 'name'>> {
    const school = await this.prismaService.school.findUnique({
      where: { id },
    });

    if (!school) throw new NotFoundException(`School with id ${id} not found`);

    return await this.prismaService.school.delete({
      where: { id },
      select: { id: true, name: true },
    });
  }
}
