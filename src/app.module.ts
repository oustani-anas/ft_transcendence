import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { SampleController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [AuthModule],
  controllers: [SampleController],
  providers: [],
})
export class AppModule {}
