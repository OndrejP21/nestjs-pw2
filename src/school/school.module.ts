import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { PrismaService } from 'src/db/prisma.service';
import { PrismaModule } from 'src/db/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SchoolController],
  providers: [SchoolService, PrismaService],
})
export class SchoolModule {}
