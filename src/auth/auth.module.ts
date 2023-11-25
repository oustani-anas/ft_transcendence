import { Global, Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';

@Global()
@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
