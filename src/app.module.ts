import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentModule } from './student/student.module';
import { SchoolModule } from './school/school.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [StudentModule, SchoolModule, AuthModule],
  controllers: [AppController, StudentController],
  providers: [AppService],
})
export class AppModule {}
